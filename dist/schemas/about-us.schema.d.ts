import { Document } from 'mongoose';
export type AboutUsDocument = AboutUs & Document;
export declare class AboutUs {
    image: string;
    title: string;
    description: string;
    whyChooseUs: string[];
    isActive: boolean;
    order: number;
}
export declare const AboutUsSchema: import("mongoose").Schema<AboutUs, import("mongoose").Model<AboutUs, any, any, any, Document<unknown, any, AboutUs, any> & AboutUs & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, AboutUs, Document<unknown, {}, import("mongoose").FlatRecord<AboutUs>, {}> & import("mongoose").FlatRecord<AboutUs> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
