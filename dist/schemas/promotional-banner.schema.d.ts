import { Document } from 'mongoose';
export type PromotionalBannerDocument = PromotionalBanner & Document;
export declare class PromotionalBanner {
    title: string;
    description: string;
    imageUrl: string;
    ctaText?: string;
    ctaUrl?: string;
    position: string;
    isActive: boolean;
    priority: number;
    startDate?: Date;
    endDate?: Date;
    displayType: string;
    autoCloseDelay: number;
    showCloseButton: boolean;
    impressions: number;
    clicks: number;
    targetAudience?: string;
    deviceType?: string;
    backgroundColor?: string;
    textColor?: string;
    borderColor?: string;
    borderRadius?: number;
    maxWidth?: number;
    maxHeight?: number;
    tags?: string[];
    createdBy?: string;
    updatedBy?: string;
}
export declare const PromotionalBannerSchema: import("mongoose").Schema<PromotionalBanner, import("mongoose").Model<PromotionalBanner, any, any, any, Document<unknown, any, PromotionalBanner, any> & PromotionalBanner & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, PromotionalBanner, Document<unknown, {}, import("mongoose").FlatRecord<PromotionalBanner>, {}> & import("mongoose").FlatRecord<PromotionalBanner> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
