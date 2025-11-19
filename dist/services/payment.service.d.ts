import { ConfigService } from '@nestjs/config';
import { Model } from 'mongoose';
import { UserService } from './user.service';
import { CourseService } from './course.service';
import { CreatePaymentOrderDto, VerifyPaymentDto, PaymentOrder, PaymentOrderDocument } from '../dto/payment.dto';
export declare class PaymentService {
    private configService;
    private userService;
    private courseService;
    private paymentOrderModel;
    private razorpay;
    constructor(configService: ConfigService, userService: UserService, courseService: CourseService, paymentOrderModel: Model<PaymentOrderDocument>);
    createPaymentOrder(createPaymentOrderDto: CreatePaymentOrderDto): Promise<{
        razorpayOrder: any;
        paymentOrder: import("mongoose").Document<unknown, {}, PaymentOrderDocument, {}> & PaymentOrder & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
            _id: string;
        }> & {
            __v: number;
        };
    }>;
    verifyPayment(verifyPaymentDto: VerifyPaymentDto): Promise<{
        success: boolean;
        message: string;
        user: import("../schemas/user.schema").User;
        course: {
            success: boolean;
            data: {
                stats: {
                    totalPhases: number;
                    totalProjects: number;
                    totalMarketTrends: number;
                    totalSyllabus: number;
                    projectsByDifficulty: {
                        beginner: number;
                        intermediate: number;
                        advanced: number;
                    };
                };
                title: string;
                description: string;
                image: string;
                video?: string;
                brochure?: string;
                price: number;
                discountPrice: number;
                rating: number;
                totalRatings: number;
                duration: string;
                instructor: import("../schemas/course.schema").Instructor;
                categoryId: import("mongoose").Types.ObjectId;
                level: string;
                enrolledStudents: number;
                tags: string[];
                isActive: boolean;
                slug: string;
                curriculum: import("../schemas/course.schema").Curriculum[];
                requirements: string[];
                learningOutcomes: string[];
                syllabus: import("../schemas/course.schema").SyllabusTopic[];
                phases: import("../schemas/course.schema").Phase[];
                projects: import("../schemas/course.schema").Project[];
                marketTrends: import("../schemas/course.schema").MarketTrend[];
                salaryInfo: import("../schemas/course.schema").SalaryInfo[];
                totalPhases?: number;
                totalProjects?: number;
                targetCompanies: string[];
                marketOverview?: string;
                careerOutlook?: string;
                _id: unknown;
                $locals: Record<string, unknown>;
                $op: "save" | "validate" | "remove" | null;
                $where: Record<string, unknown>;
                baseModelName?: string;
                collection: import("mongoose").Collection;
                db: import("mongoose").Connection;
                errors?: import("mongoose").Error.ValidationError;
                id?: any;
                isNew: boolean;
                schema: import("mongoose").Schema;
                __v: number;
            };
        };
        paymentOrder: import("mongoose").Document<unknown, {}, PaymentOrderDocument, {}> & PaymentOrder & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
            _id: string;
        }> & {
            __v: number;
        };
    }>;
    getPaymentOrder(orderId: string): Promise<import("mongoose").Document<unknown, {}, PaymentOrderDocument, {}> & PaymentOrder & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: string;
    }> & {
        __v: number;
    }>;
    getUserPaymentHistory(userId: string): Promise<{
        payments: (import("mongoose").Document<unknown, {}, PaymentOrderDocument, {}> & PaymentOrder & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
            _id: string;
        }> & {
            __v: number;
        })[];
        totalPayments: number;
        totalAmount: number;
    }>;
    refundPayment(paymentId: string, amount?: number): Promise<{
        success: boolean;
        refund: import("razorpay/dist/types/refunds").Refunds.RazorpayRefund;
        message: string;
    }>;
    getAllPaymentOrders(page?: number, limit?: number, status?: string): Promise<{
        payments: (import("mongoose").Document<unknown, {}, PaymentOrderDocument, {}> & PaymentOrder & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
            _id: string;
        }> & {
            __v: number;
        })[];
        total: number;
        page: number;
        totalPages: number;
    }>;
}
