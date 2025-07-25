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
exports.PaymentOrderSchema = exports.PaymentOrder = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let PaymentOrder = class PaymentOrder {
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
    completedAt;
    createdAt;
    updatedAt;
};
exports.PaymentOrder = PaymentOrder;
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], PaymentOrder.prototype, "orderId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'User', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], PaymentOrder.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Course', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], PaymentOrder.prototype, "courseId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], PaymentOrder.prototype, "amount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: 'INR' }),
    __metadata("design:type", String)
], PaymentOrder.prototype, "currency", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        enum: ['created', 'completed', 'failed', 'refunded'],
        default: 'created',
    }),
    __metadata("design:type", String)
], PaymentOrder.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], PaymentOrder.prototype, "razorpayOrderId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PaymentOrder.prototype, "razorpayPaymentId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PaymentOrder.prototype, "razorpaySignature", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], PaymentOrder.prototype, "receipt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], PaymentOrder.prototype, "notes", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PaymentOrder.prototype, "failureReason", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PaymentOrder.prototype, "refundId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], PaymentOrder.prototype, "refundAmount", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], PaymentOrder.prototype, "completedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now }),
    __metadata("design:type", Date)
], PaymentOrder.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now }),
    __metadata("design:type", Date)
], PaymentOrder.prototype, "updatedAt", void 0);
exports.PaymentOrder = PaymentOrder = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], PaymentOrder);
exports.PaymentOrderSchema = mongoose_1.SchemaFactory.createForClass(PaymentOrder);
exports.PaymentOrderSchema.index({ userId: 1, status: 1 });
exports.PaymentOrderSchema.index({ razorpayOrderId: 1 });
exports.PaymentOrderSchema.index({ razorpayPaymentId: 1 });
exports.PaymentOrderSchema.index({ createdAt: -1 });
//# sourceMappingURL=payment-order.schema.js.map