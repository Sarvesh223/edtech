import { Document } from 'mongoose';
export type ContactInfoDocument = ContactInfo & Document;
export declare class ContactInfo {
    phoneNumber: string;
    email: string;
    office: string;
    isActive: boolean;
}
export declare const ContactInfoSchema: import("mongoose").Schema<ContactInfo, import("mongoose").Model<ContactInfo, any, any, any, Document<unknown, any, ContactInfo, any> & ContactInfo & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ContactInfo, Document<unknown, {}, import("mongoose").FlatRecord<ContactInfo>, {}> & import("mongoose").FlatRecord<ContactInfo> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
