import { Document, Types } from 'mongoose';
export type PaymentOrderDocument = PaymentOrder & Document;
export declare class PaymentOrder {
    orderId: string;
    userId: Types.ObjectId;
    courseId: Types.ObjectId;
    amount: number;
    currency: string;
    status: string;
    razorpayOrderId: string;
    razorpayPaymentId: string;
    razorpaySignature: string;
    receipt: string;
    notes: Record<string, any>;
    failureReason: string;
    refundId: string;
    refundAmount: number;
    completedAt: Date;
    createdAt: Date;
    updatedAt: Date;
}
export declare const PaymentOrderSchema: import("mongoose").Schema<PaymentOrder, import("mongoose").Model<PaymentOrder, any, any, any, Document<unknown, any, PaymentOrder, any> & PaymentOrder & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, PaymentOrder, Document<unknown, {}, import("mongoose").FlatRecord<PaymentOrder>, {}> & import("mongoose").FlatRecord<PaymentOrder> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
