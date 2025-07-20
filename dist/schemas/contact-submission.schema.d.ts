import { Document } from 'mongoose';
export type ContactSubmissionDocument = ContactSubmission & Document;
export declare class ContactSubmission {
    name: string;
    email: string;
    mobile: string;
    message: string;
    status: string;
    submittedAt: Date;
}
export declare const ContactSubmissionSchema: import("mongoose").Schema<ContactSubmission, import("mongoose").Model<ContactSubmission, any, any, any, Document<unknown, any, ContactSubmission, any> & ContactSubmission & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ContactSubmission, Document<unknown, {}, import("mongoose").FlatRecord<ContactSubmission>, {}> & import("mongoose").FlatRecord<ContactSubmission> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
