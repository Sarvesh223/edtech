import { Document } from 'mongoose';
export type PartnerDocument = Partner & Document;
export declare class Partner {
    name: string;
    imageUrl: string;
    website?: string;
    description?: string;
    isActive: boolean;
    displayOrder: number;
    createdAt: Date;
    updatedAt: Date;
}
export declare const PartnerSchema: import("mongoose").Schema<Partner, import("mongoose").Model<Partner, any, any, any, Document<unknown, any, Partner, any> & Partner & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Partner, Document<unknown, {}, import("mongoose").FlatRecord<Partner>, {}> & import("mongoose").FlatRecord<Partner> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
