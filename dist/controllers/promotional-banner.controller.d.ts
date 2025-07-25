import { PromotionalBannerService } from '../services/promotional-banner.service';
import { CreatePromotionalBannerDto, UpdatePromotionalBannerDto, PromotionalBannerQueryDto } from '../dto/promotional-banner.dto';
export declare class PromotionalBannerController {
    private readonly promotionalBannerService;
    constructor(promotionalBannerService: PromotionalBannerService);
    create(createPromotionalBannerDto: CreatePromotionalBannerDto): Promise<import("../schemas/promotional-banner.schema").PromotionalBanner>;
    findAll(query: PromotionalBannerQueryDto): Promise<{
        banners: import("../schemas/promotional-banner.schema").PromotionalBanner[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    findActive(): Promise<import("../schemas/promotional-banner.schema").PromotionalBanner[]>;
    findOne(id: string): Promise<import("../schemas/promotional-banner.schema").PromotionalBanner>;
    update(id: string, updatePromotionalBannerDto: UpdatePromotionalBannerDto): Promise<import("../schemas/promotional-banner.schema").PromotionalBanner>;
    remove(id: string): Promise<void>;
    updateStats(id: string, action: 'impression' | 'click'): Promise<void>;
    getStats(id: string): Promise<{
        impressions: number;
        clicks: number;
        ctr: number;
    }>;
    toggleStatus(id: string): Promise<import("../schemas/promotional-banner.schema").PromotionalBanner>;
}
