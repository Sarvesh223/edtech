"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const crypto = __importStar(require("crypto"));
const user_service_1 = require("./user.service");
const course_service_1 = require("./course.service");
const payment_dto_1 = require("../dto/payment.dto");
const payment_order_schema_1 = require("../schemas/payment-order.schema");
const razorpay_1 = __importDefault(require("razorpay"));
let PaymentService = class PaymentService {
    configService;
    userService;
    courseService;
    paymentOrderModel;
    razorpay;
    constructor(configService, userService, courseService, paymentOrderModel) {
        this.configService = configService;
        this.userService = userService;
        this.courseService = courseService;
        this.paymentOrderModel = paymentOrderModel;
        const keyId = this.configService.get('RAZORPAY_KEY_ID') || process.env.RAZORPAY_KEY_ID || 'rzp_test_ghTeekIY3ZvfG3';
        const keySecret = this.configService.get('RAZORPAY_KEY_SECRET') || process.env.RAZORPAY_KEY_SECRET || 'your_secret_key_here';
        console.log('Razorpay Key ID:', keyId ? 'Present' : 'Missing');
        console.log('Razorpay Key Secret:', keySecret ? 'Present' : 'Missing');
        if (!keyId || !keySecret || keySecret === 'your_secret_key_here') {
            console.error('Razorpay credentials are not properly configured');
            throw new Error('Razorpay credentials are not properly configured');
        }
        this.razorpay = new razorpay_1.default({
            key_id: keyId,
            key_secret: keySecret,
        });
        console.log('Razorpay instance initialized successfully');
    }
    async createPaymentOrder(createPaymentOrderDto) {
        try {
            console.log('Creating payment order with data:', createPaymentOrderDto);
            const { userId, courseId, amount, currency = 'INR', } = createPaymentOrderDto;
            if (!userId || !courseId || !amount) {
                throw new common_1.BadRequestException('Missing required fields: userId, courseId, or amount');
            }
            console.log('Finding user with ID:', userId);
            const user = await this.userService.findOne(userId);
            if (!user) {
                console.log('User not found for ID:', userId);
                throw new common_1.NotFoundException('User not found');
            }
            console.log('User found:', user.email);
            console.log('Finding course with ID:', courseId);
            const course = await this.courseService.getCourseFullDetails(courseId);
            if (!course) {
                console.log('Course not found for ID:', courseId);
                throw new common_1.NotFoundException('Course not found');
            }
            console.log('Course found:', course.data?.title);
            const alreadyPurchased = user.purchasedCourses?.some((purchasedCourseId) => purchasedCourseId.toString() === courseId);
            if (alreadyPurchased) {
                console.log('Course already purchased by user');
                throw new common_1.BadRequestException('Course already purchased');
            }
            if (course.data?.price && Math.abs(course.data.price - amount) > 0.01) {
                console.log(`Price mismatch: Course price ${course.data.price}, Amount ${amount}`);
                throw new common_1.BadRequestException('Amount does not match course price');
            }
            const timestamp = Date.now().toString().slice(-8);
            const shortCourseId = courseId.slice(-6);
            const shortUserId = userId.slice(-6);
            const receipt = `c${shortCourseId}_u${shortUserId}_${timestamp}`;
            console.log('Generated receipt:', receipt, 'Length:', receipt.length);
            const orderData = {
                amount: Math.round(amount * 100),
                currency,
                receipt: receipt,
                notes: {
                    userId,
                    courseId,
                    courseName: course.data?.title || 'Unknown Course',
                    userEmail: user.email,
                    userName: user.name,
                },
            };
            console.log('Creating Razorpay order with data:', orderData);
            let razorpayOrder;
            try {
                razorpayOrder = await this.razorpay.orders.create(orderData);
                console.log('Razorpay order created successfully:', razorpayOrder.id);
            }
            catch (razorpayError) {
                console.error('Razorpay API Error:', razorpayError);
                console.error('Razorpay Error Details:', {
                    message: razorpayError.message,
                    statusCode: razorpayError.statusCode,
                    error: razorpayError.error,
                });
                throw new common_1.InternalServerErrorException(`Razorpay API Error: ${razorpayError.message || 'Unknown error'}`);
            }
            const paymentOrder = new this.paymentOrderModel({
                orderId: razorpayOrder.id,
                userId,
                courseId,
                amount,
                currency,
                status: 'created',
                razorpayOrderId: razorpayOrder.id,
                receipt: razorpayOrder.receipt,
                notes: razorpayOrder.notes,
                createdAt: new Date(),
            });
            console.log('Saving payment order to database');
            await paymentOrder.save();
            console.log('Payment order saved successfully');
            return {
                razorpayOrder,
                paymentOrder,
            };
        }
        catch (error) {
            console.error('Error in createPaymentOrder:', error);
            console.error('Error stack:', error.stack);
            if (error instanceof common_1.NotFoundException ||
                error instanceof common_1.BadRequestException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException(`Failed to create payment order: ${error.message || 'Unknown error'}`);
        }
    }
    async verifyPayment(verifyPaymentDto) {
        try {
            const { razorpayOrderId, razorpayPaymentId, razorpaySignature, userId, courseId, } = verifyPaymentDto;
            const paymentOrder = await this.paymentOrderModel.findOne({
                razorpayOrderId,
                userId,
                courseId,
            });
            if (!paymentOrder)
                throw new common_1.NotFoundException('Payment order not found');
            const body = razorpayOrderId + '|' + razorpayPaymentId;
            const razorpayKeySecret = this.configService.get('RAZORPAY_KEY_SECRET');
            if (!razorpayKeySecret) {
                throw new common_1.InternalServerErrorException('Razorpay key secret is not configured');
            }
            const expectedSignature = crypto
                .createHmac('sha256', razorpayKeySecret)
                .update(body.toString())
                .digest('hex');
            if (expectedSignature !== razorpaySignature) {
                paymentOrder.status = payment_dto_1.PaymentStatus.FAILED;
                paymentOrder.failureReason = 'Invalid signature';
                paymentOrder.updatedAt = new Date();
                await paymentOrder.save();
                throw new common_1.BadRequestException('Payment verification failed');
            }
            const payment = await this.razorpay.payments.fetch(razorpayPaymentId);
            if (payment.status !== 'captured') {
                paymentOrder.status = payment_dto_1.PaymentStatus.FAILED;
                paymentOrder.failureReason = `Payment status: ${payment.status}`;
                paymentOrder.updatedAt = new Date();
                await paymentOrder.save();
                throw new common_1.BadRequestException('Payment not captured');
            }
            const user = await this.userService.addToPurchasedCourses(userId, courseId);
            const course = await this.courseService.getCourseFullDetails(courseId);
            paymentOrder.status = payment_dto_1.PaymentStatus.COMPLETED;
            paymentOrder.razorpayPaymentId = razorpayPaymentId;
            paymentOrder.razorpaySignature = razorpaySignature;
            paymentOrder.completedAt = new Date();
            paymentOrder.updatedAt = new Date();
            await paymentOrder.save();
            return {
                success: true,
                message: 'Payment verified successfully and course added to purchased courses',
                user,
                course,
                paymentOrder,
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException ||
                error instanceof common_1.BadRequestException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException(`Payment verification failed: ${error.message}`);
        }
    }
    async getPaymentOrder(orderId) {
        const paymentOrder = await this.paymentOrderModel.findOne({
            razorpayOrderId: orderId,
        });
        if (!paymentOrder)
            throw new common_1.NotFoundException('Payment order not found');
        return paymentOrder;
    }
    async getUserPaymentHistory(userId) {
        const payments = await this.paymentOrderModel
            .find({ userId })
            .populate('courseId', 'title description price image')
            .sort({ createdAt: -1 });
        const totalPayments = payments.length;
        const totalAmount = payments
            .filter((payment) => payment.status === payment_dto_1.PaymentStatus.COMPLETED)
            .reduce((sum, payment) => sum + payment.amount, 0);
        return {
            payments,
            totalPayments,
            totalAmount,
        };
    }
    async refundPayment(paymentId, amount) {
        try {
            const paymentOrder = await this.paymentOrderModel.findOne({
                razorpayPaymentId: paymentId,
                status: 'completed',
            });
            if (!paymentOrder)
                throw new common_1.NotFoundException('Completed payment not found');
            const refundAmount = amount
                ? Math.round(amount * 100)
                : Math.round(paymentOrder.amount * 100);
            const refund = await this.razorpay.payments.refund(paymentId, {
                amount: refundAmount,
                speed: 'normal',
                notes: {
                    refund_reason: 'Course refund',
                    original_order_id: paymentOrder.razorpayOrderId,
                },
            });
            paymentOrder.status = payment_dto_1.PaymentStatus.REFUNDED;
            paymentOrder.refundId = refund.id;
            paymentOrder.refundAmount = refundAmount / 100;
            paymentOrder.updatedAt = new Date();
            await paymentOrder.save();
            await this.userService.removeFromPurchasedCourses(paymentOrder.userId, paymentOrder.courseId);
            return {
                success: true,
                refund,
                message: 'Refund processed successfully and course removed from purchased courses',
            };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`Refund processing failed: ${error.message}`);
        }
    }
    async getAllPaymentOrders(page = 1, limit = 10, status) {
        const filter = {};
        if (status)
            filter.status = status;
        const total = await this.paymentOrderModel.countDocuments(filter);
        const totalPages = Math.ceil(total / limit);
        const skip = (page - 1) * limit;
        const payments = await this.paymentOrderModel
            .find(filter)
            .populate('userId', 'name email phone')
            .populate('courseId', 'title price image')
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);
        return {
            payments,
            total,
            page,
            totalPages,
        };
    }
};
exports.PaymentService = PaymentService;
exports.PaymentService = PaymentService = __decorate([
    (0, common_1.Injectable)(),
    __param(3, (0, mongoose_1.InjectModel)(payment_order_schema_1.PaymentOrder.name)),
    __metadata("design:paramtypes", [config_1.ConfigService,
        user_service_1.UserService,
        course_service_1.CourseService,
        mongoose_2.Model])
], PaymentService);
//# sourceMappingURL=payment.service.js.map