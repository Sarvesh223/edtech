import { Document, Types } from 'mongoose';
export type TestimonialDocument = Testimonial & Document;
export declare class Testimonial {
    studentName: string;
    studentEmail: string;
    course: string;
    message: string;
    rating: number;
    studentImage?: string;
    linkedinUrl?: string;
    fromCompanyName?: string;
    toCompanyName?: string;
    studentRole?: string;
    batchYear?: string;
    status: string;
    featured: boolean;
    isActive: boolean;
    approvedBy?: Types.ObjectId;
    approvedAt?: Date;
    createdAt: Date;
    updatedAt: Date;
}
export declare const TestimonialSchema: import("mongoose").Schema<Testimonial, import("mongoose").Model<Testimonial, any, any, any, Document<unknown, any, Testimonial, any> & Testimonial & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Testimonial, Document<unknown, {}, import("mongoose").FlatRecord<Testimonial>, {}> & import("mongoose").FlatRecord<Testimonial> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
