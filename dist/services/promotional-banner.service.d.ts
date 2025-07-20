import { Model } from 'mongoose';
import { PromotionalBanner, PromotionalBannerDocument } from '../schemas/promotional-banner.schema';
import { CreatePromotionalBannerDto, UpdatePromotionalBannerDto, PromotionalBannerQueryDto } from '../dto/promotional-banner.dto';
export declare class PromotionalBannerService {
    private promotionalBannerModel;
    constructor(promotionalBannerModel: Model<PromotionalBannerDocument>);
    create(createPromotionalBannerDto: CreatePromotionalBannerDto): Promise<PromotionalBanner>;
    findAll(query: PromotionalBannerQueryDto): Promise<{
        banners: PromotionalBanner[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    findActive(): Promise<PromotionalBanner[]>;
    findOne(id: string): Promise<PromotionalBanner>;
    update(id: string, updatePromotionalBannerDto: UpdatePromotionalBannerDto): Promise<PromotionalBanner>;
    remove(id: string): Promise<void>;
    updateStats(id: string, action: 'impression' | 'click'): Promise<void>;
    getStats(id: string): Promise<{
        impressions: number;
        clicks: number;
        ctr: number;
    }>;
    toggleStatus(id: string): Promise<PromotionalBanner>;
}
