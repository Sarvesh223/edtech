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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentOrder = exports.PaymentStatus = exports.RefundPaymentDto = exports.VerifyPaymentDto = exports.CreatePaymentOrderDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreatePaymentOrderDto {
    userId;
    courseId;
    amount;
    currency;
}
exports.CreatePaymentOrderDto = CreatePaymentOrderDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User ID who is making the payment',
        example: '60d0fe4f5311236168a109ca',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePaymentOrderDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Course ID to be purchased',
        example: '60d0fe4f5311236168a109cb',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePaymentOrderDto.prototype, "courseId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Amount to be paid (in INR)',
        example: 2999,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CreatePaymentOrderDto.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Currency for the payment',
        default: 'INR',
        example: 'INR',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePaymentOrderDto.prototype, "currency", void 0);
class VerifyPaymentDto {
    razorpayOrderId;
    razorpayPaymentId;
    razorpaySignature;
    userId;
    courseId;
}
exports.VerifyPaymentDto = VerifyPaymentDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Razorpay Order ID',
        example: 'order_ABC123xyz',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], VerifyPaymentDto.prototype, "razorpayOrderId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Razorpay Payment ID',
        example: 'pay_XYZ789abc',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], VerifyPaymentDto.prototype, "razorpayPaymentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Razorpay Signature for verification',
        example: 'signature_string_here',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], VerifyPaymentDto.prototype, "razorpaySignature", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User ID who made the payment',
        example: '60d0fe4f5311236168a109ca',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], VerifyPaymentDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Course ID that was purchased',
        example: '60d0fe4f5311236168a109cb',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], VerifyPaymentDto.prototype, "courseId", void 0);
class RefundPaymentDto {
    paymentId;
    amount;
}
exports.RefundPaymentDto = RefundPaymentDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Razorpay Payment ID to refund',
        example: 'pay_XYZ789abc',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RefundPaymentDto.prototype, "paymentId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Amount to refund (optional, full refund if not provided)',
        example: 1500,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], RefundPaymentDto.prototype, "amount", void 0);
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["CREATED"] = "created";
    PaymentStatus["COMPLETED"] = "completed";
    PaymentStatus["FAILED"] = "failed";
    PaymentStatus["REFUNDED"] = "refunded";
})(PaymentStatus || (exports.PaymentStatus = PaymentStatus = {}));
class PaymentOrder {
    _id;
    orderId;
    userId;
    courseId;
    amount;
    currency;
    status;
    razorpayOrderId;
    razorpayPaymentId;
    razorpaySignature;
    receipt;
    notes;
    failureReason;
    refundId;
    refundAmount;
    createdAt;
    updatedAt;
    completedAt;
}
exports.PaymentOrder = PaymentOrder;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Payment order ID',
        example: '60d0fe4f5311236168a109cc',
    }),
    __metadata("design:type", String)
], PaymentOrder.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Razorpay Order ID',
        example: 'order_ABC123xyz',
    }),
    __metadata("design:type", String)
], PaymentOrder.prototype, "orderId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User ID who made the payment',
        example: '60d0fe4f5311236168a109ca',
    }),
    __metadata("design:type", String)
], PaymentOrder.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Course ID that was purchased',
        example: '60d0fe4f5311236168a109cb',
    }),
    __metadata("design:type", String)
], PaymentOrder.prototype, "courseId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Payment amount',
        example: 2999,
    }),
    __metadata("design:type", Number)
], PaymentOrder.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Payment currency',
        example: 'INR',
    }),
    __metadata("design:type", String)
], PaymentOrder.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Payment status',
        enum: PaymentStatus,
        example: PaymentStatus.COMPLETED,
    }),
    __metadata("design:type", String)
], PaymentOrder.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Razorpay Order ID',
        example: 'order_ABC123xyz',
    }),
    __metadata("design:type", String)
], PaymentOrder.prototype, "razorpayOrderId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Razorpay Payment ID (available after payment)',
        example: 'pay_XYZ789abc',
    }),
    __metadata("design:type", String)
], PaymentOrder.prototype, "razorpayPaymentId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Razorpay Signature (available after payment verification)',
        example: 'signature_string_here',
    }),
    __metadata("design:type", String)
], PaymentOrder.prototype, "razorpaySignature", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Payment receipt',
        example: 'course_60d0fe4f5311236168a109cb_user_60d0fe4f5311236168a109ca_1625097599000',
    }),
    __metadata("design:type", String)
], PaymentOrder.prototype, "receipt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Payment notes',
        example: {
            userId: '60d0fe4f5311236168a109ca',
            courseId: '60d0fe4f5311236168a109cb',
            courseName: 'Advanced React Course',
        },
    }),
    __metadata("design:type", Object)
], PaymentOrder.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Failure reason (if payment failed)',
        example: 'Invalid signature',
    }),
    __metadata("design:type", String)
], PaymentOrder.prototype, "failureReason", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Refund ID (if payment was refunded)',
        example: 'rfnd_ABC123xyz',
    }),
    __metadata("design:type", String)
], PaymentOrder.prototype, "refundId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Refund amount (if payment was refunded)',
        example: 2999,
    }),
    __metadata("design:type", Number)
], PaymentOrder.prototype, "refundAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Payment order creation date',
        example: '2021-07-01T00:00:00.000Z',
    }),
    __metadata("design:type", Date)
], PaymentOrder.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Payment order last update date',
        example: '2021-07-01T00:05:00.000Z',
    }),
    __metadata("design:type", Date)
], PaymentOrder.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Payment completion date',
        example: '2021-07-01T00:05:00.000Z',
    }),
    __metadata("design:type", Date)
], PaymentOrder.prototype, "completedAt", void 0);
//# sourceMappingURL=payment.dto.js.map