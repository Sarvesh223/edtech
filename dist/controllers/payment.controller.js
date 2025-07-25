"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const payment_service_1 = require("../services/payment.service");
const payment_dto_1 = require("../dto/payment.dto");
let PaymentController = class PaymentController {
    paymentService;
    constructor(paymentService) {
        this.paymentService = paymentService;
    }
    async createPaymentOrder(createPaymentOrderDto) {
        const result = await this.paymentService.createPaymentOrder(createPaymentOrderDto);
        return {
            success: true,
            message: 'Payment order created successfully',
            razorpayOrder: result.razorpayOrder,
            paymentOrder: result.paymentOrder,
        };
    }
    async verifyPayment(verifyPaymentDto) {
        return await this.paymentService.verifyPayment(verifyPaymentDto);
    }
    async getPaymentOrder(orderId) {
        const paymentOrder = await this.paymentService.getPaymentOrder(orderId);
        return {
            success: true,
            paymentOrder,
        };
    }
    async getUserPaymentHistory(userId) {
        const data = await this.paymentService.getUserPaymentHistory(userId);
        return {
            success: true,
            data,
        };
    }
    async refundPayment(refundPaymentDto) {
        const result = await this.paymentService.refundPayment(refundPaymentDto.paymentId, refundPaymentDto.amount);
        return {
            success: result.success,
            message: result.message,
            refund: result.refund,
        };
    }
    async getAllPaymentOrders(page, limit, status) {
        const data = await this.paymentService.getAllPaymentOrders(page || 1, limit || 10, status);
        return {
            success: true,
            data,
        };
    }
    getRazorpayConfig() {
        return {
            success: true,
            config: {
                keyId: process.env.RAZORPAY_KEY_ID ?? '',
                currency: 'INR',
            },
        };
    }
};
exports.PaymentController = PaymentController;
__decorate([
    (0, common_1.Post)('create-order'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({
        summary: 'Create Razorpay payment order for course purchase',
        description: 'Creates a Razorpay order and saves payment details in database',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Payment order created successfully',
        schema: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' },
                razorpayOrder: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' },
                        amount: { type: 'number' },
                        currency: { type: 'string' },
                        receipt: { type: 'string' },
                        status: { type: 'string' },
                    },
                },
                paymentOrder: { type: 'object' },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User or Course not found' }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [payment_dto_1.CreatePaymentOrderDto]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "createPaymentOrder", null);
__decorate([
    (0, common_1.Post)('verify'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Verify Razorpay payment and add course to purchased courses',
        description: 'Verifies payment signature and automatically adds course to user purchased courses on success',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Payment verified and course added successfully',
        schema: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' },
                user: { type: 'object' },
                course: { type: 'object' },
                paymentOrder: { type: 'object' },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Payment verification failed' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Payment order not found' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [payment_dto_1.VerifyPaymentDto]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "verifyPayment", null);
__decorate([
    (0, common_1.Get)('order/:orderId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get payment order details' }),
    (0, swagger_1.ApiParam)({ name: 'orderId', description: 'Razorpay Order ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Payment order details',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Payment order not found' }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('orderId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "getPaymentOrder", null);
__decorate([
    (0, common_1.Get)('user/:userId/history'),
    (0, swagger_1.ApiOperation)({ summary: 'Get user payment history' }),
    (0, swagger_1.ApiParam)({ name: 'userId', description: 'User ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'User payment history retrieved successfully',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User not found' }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "getUserPaymentHistory", null);
__decorate([
    (0, common_1.Post)('refund'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Process refund for a payment',
        description: 'Refunds payment and removes course from user purchased courses',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Refund processed successfully',
        schema: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' },
                refund: { type: 'object' },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Refund processing failed' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Payment not found' }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [payment_dto_1.RefundPaymentDto]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "refundPayment", null);
__decorate([
    (0, common_1.Get)('admin/all'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all payment orders (Admin)' }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, description: 'Page number' }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, description: 'Items per page' }),
    (0, swagger_1.ApiQuery)({
        name: 'status',
        required: false,
        description: 'Filter by payment status',
        enum: ['created', 'completed', 'failed', 'refunded'],
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Payment orders retrieved successfully',
    }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "getAllPaymentOrders", null);
__decorate([
    (0, common_1.Get)('config'),
    (0, swagger_1.ApiOperation)({ summary: 'Get Razorpay configuration for frontend' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Razorpay configuration',
        schema: {
            type: 'object',
            properties: {
                keyId: { type: 'string' },
                currency: { type: 'string' },
            },
        },
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], PaymentController.prototype, "getRazorpayConfig", null);
exports.PaymentController = PaymentController = __decorate([
    (0, swagger_1.ApiTags)('Payments'),
    (0, common_1.Controller)('payments'),
    __metadata("design:paramtypes", [payment_service_1.PaymentService])
], PaymentController);
//# sourceMappingURL=payment.controller.js.map