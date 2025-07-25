export declare class CreatePromotionalBannerDto {
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
}
export declare class UpdatePromotionalBannerDto {
    title?: string;
    description?: string;
    imageUrl?: string;
    ctaText?: string;
    ctaUrl?: string;
    position?: string;
    isActive?: boolean;
    priority?: number;
    startDate?: Date;
    endDate?: Date;
    displayType?: string;
    autoCloseDelay?: number;
    showCloseButton?: boolean;
    targetAudience?: string;
    deviceType?: string;
    backgroundColor?: string;
    textColor?: string;
    borderColor?: string;
    borderRadius?: number;
    maxWidth?: number;
    maxHeight?: number;
    tags?: string[];
    updatedBy?: string;
}
export declare class PromotionalBannerQueryDto {
    isActive?: boolean;
    displayType?: string;
    position?: string;
    targetAudience?: string;
    deviceType?: string;
    page?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: string;
}
export declare class PromotionalBannerStatsDto {
    bannerId: string;
    action?: string;
}
