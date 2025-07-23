import { Document } from 'mongoose';
export type JourneyDocument = Journey & Document;
export declare class Journey {
    year: number;
    title: string;
    description: string;
}
export declare const JourneySchema: import("mongoose").Schema<Journey, import("mongoose").Model<Journey, any, any, any, Document<unknown, any, Journey, any> & Journey & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Journey, Document<unknown, {}, import("mongoose").FlatRecord<Journey>, {}> & import("mongoose").FlatRecord<Journey> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
