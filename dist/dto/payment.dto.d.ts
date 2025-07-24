import { Document } from 'mongoose';
export declare class CreatePaymentOrderDto {
    userId: string;
    courseId: string;
    amount: number;
    currency?: string;
}
export declare class VerifyPaymentDto {
    razorpayOrderId: string;
    razorpayPaymentId: string;
    razorpaySignature: string;
    userId: string;
    courseId: string;
}
export declare class RefundPaymentDto {
    paymentId: string;
    amount?: number;
}
export declare enum PaymentStatus {
    CREATED = "created",
    COMPLETED = "completed",
    FAILED = "failed",
    REFUNDED = "refunded"
}
export declare class PaymentOrder {
    _id: string;
    orderId: string;
    userId: string;
    courseId: string;
    amount: number;
    currency: string;
    status: PaymentStatus;
    razorpayOrderId: string;
    razorpayPaymentId?: string;
    razorpaySignature?: string;
    receipt: string;
    notes?: Record<string, any>;
    failureReason?: string;
    refundId?: string;
    refundAmount?: number;
    createdAt: Date;
    updatedAt: Date;
    completedAt?: Date;
}
export type PaymentOrderDocument = PaymentOrder & Document;
