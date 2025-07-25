import { Document } from 'mongoose';
export type StatisticsDocument = Statistics & Document;
export declare class Statistics {
    totalUsers: number;
    totalInstructors: number;
    countryReached: string;
    courseCompletionRate: number;
    isActive: boolean;
}
export declare const StatisticsSchema: import("mongoose").Schema<Statistics, import("mongoose").Model<Statistics, any, any, any, Document<unknown, any, Statistics, any> & Statistics & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Statistics, Document<unknown, {}, import("mongoose").FlatRecord<Statistics>, {}> & import("mongoose").FlatRecord<Statistics> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
