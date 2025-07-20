import { Document } from 'mongoose';
export type InstructorDocument = Instructor & Document;
export declare class Instructor {
    name: string;
    designation: string;
    image: string;
    socialHandles: {
        twitter?: string;
        facebook?: string;
        instagram?: string;
    };
    createdAt?: Date;
    updatedAt?: Date;
}
export declare const InstructorSchema: import("mongoose").Schema<Instructor, import("mongoose").Model<Instructor, any, any, any, Document<unknown, any, Instructor, any> & Instructor & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Instructor, Document<unknown, {}, import("mongoose").FlatRecord<Instructor>, {}> & import("mongoose").FlatRecord<Instructor> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
