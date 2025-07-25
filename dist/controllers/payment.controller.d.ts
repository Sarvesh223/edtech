import { PaymentService } from '../services/payment.service';
import { CreatePaymentOrderDto, VerifyPaymentDto, RefundPaymentDto } from '../dto/payment.dto';
export declare class PaymentController {
    private readonly paymentService;
    constructor(paymentService: PaymentService);
    createPaymentOrder(createPaymentOrderDto: CreatePaymentOrderDto): Promise<{
        success: boolean;
        message: string;
        razorpayOrder: any;
        paymentOrder: any;
    }>;
    verifyPayment(verifyPaymentDto: VerifyPaymentDto): Promise<{
        success: boolean;
        message: string;
        user?: any;
        course?: any;
        paymentOrder?: any;
    }>;
    getPaymentOrder(orderId: string): Promise<{
        success: boolean;
        paymentOrder: any;
    }>;
    getUserPaymentHistory(userId: string): Promise<{
        success: boolean;
        data: {
            payments: any[];
            totalPayments: number;
            totalAmount: number;
        };
    }>;
    refundPayment(refundPaymentDto: RefundPaymentDto): Promise<{
        success: boolean;
        message: string;
        refund: any;
    }>;
    getAllPaymentOrders(page?: number, limit?: number, status?: string): Promise<{
        success: boolean;
        data: {
            payments: any[];
            total: number;
            page: number;
            totalPages: number;
        };
    }>;
    getRazorpayConfig(): {
        success: boolean;
        config: {
            keyId: string;
            currency: string;
        };
    };
}
