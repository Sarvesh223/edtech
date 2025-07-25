"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionalBannerService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const promotional_banner_schema_1 = require("../schemas/promotional-banner.schema");
let PromotionalBannerService = class PromotionalBannerService {
    promotionalBannerModel;
    constructor(promotionalBannerModel) {
        this.promotionalBannerModel = promotionalBannerModel;
    }
    async create(createPromotionalBannerDto) {
        if (createPromotionalBannerDto.startDate &&
            createPromotionalBannerDto.endDate) {
            if (new Date(createPromotionalBannerDto.startDate) >=
                new Date(createPromotionalBannerDto.endDate)) {
                throw new common_1.BadRequestException('Start date must be before end date');
            }
        }
        const createdBanner = new this.promotionalBannerModel(createPromotionalBannerDto);
        return createdBanner.save();
    }
    async findAll(query) {
        const { page = 1, limit = 10, sortBy = 'priority', sortOrder = 'desc', ...filters } = query;
        const filterObj = {};
        if (filters.isActive !== undefined) {
            filterObj.isActive = filters.isActive;
        }
        if (filters.displayType) {
            filterObj.displayType = filters.displayType;
        }
        if (filters.position) {
            filterObj.position = filters.position;
        }
        if (filters.targetAudience) {
            filterObj.targetAudience = new RegExp(filters.targetAudience, 'i');
        }
        if (filters.deviceType) {
            filterObj.deviceType = filters.deviceType;
        }
        const currentDate = new Date();
        filterObj.$or = [
            { startDate: { $exists: false }, endDate: { $exists: false } },
            { startDate: { $lte: currentDate }, endDate: { $gte: currentDate } },
            { startDate: { $exists: false }, endDate: { $gte: currentDate } },
            { startDate: { $lte: currentDate }, endDate: { $exists: false } },
        ];
        const skip = (page - 1) * limit;
        const sortObj = {
            [sortBy]: sortOrder === 'asc' ? 1 : -1,
        };
        const [banners, total] = await Promise.all([
            this.promotionalBannerModel
                .find(filterObj)
                .sort(sortObj)
                .skip(skip)
                .limit(limit)
                .exec(),
            this.promotionalBannerModel.countDocuments(filterObj).exec(),
        ]);
        return {
            banners,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        };
    }
    async findActive() {
        return this.promotionalBannerModel
            .find({ isActive: true })
            .sort({ priority: -1, createdAt: -1 })
            .exec();
    }
    async findOne(id) {
        const banner = await this.promotionalBannerModel.findById(id).exec();
        if (!banner) {
            throw new common_1.NotFoundException(`Promotional banner with ID ${id} not found`);
        }
        return banner;
    }
    async update(id, updatePromotionalBannerDto) {
        if (updatePromotionalBannerDto.startDate &&
            updatePromotionalBannerDto.endDate) {
            if (new Date(updatePromotionalBannerDto.startDate) >=
                new Date(updatePromotionalBannerDto.endDate)) {
                throw new common_1.BadRequestException('Start date must be before end date');
            }
        }
        const updatedBanner = await this.promotionalBannerModel
            .findByIdAndUpdate(id, updatePromotionalBannerDto, { new: true })
            .exec();
        if (!updatedBanner) {
            throw new common_1.NotFoundException(`Promotional banner with ID ${id} not found`);
        }
        return updatedBanner;
    }
    async remove(id) {
        const result = await this.promotionalBannerModel
            .findByIdAndDelete(id)
            .exec();
        if (!result) {
            throw new common_1.NotFoundException(`Promotional banner with ID ${id} not found`);
        }
    }
    async updateStats(id, action) {
        const updateField = action === 'impression' ? 'impressions' : 'clicks';
        const result = await this.promotionalBannerModel
            .findByIdAndUpdate(id, { $inc: { [updateField]: 1 } })
            .exec();
        if (!result) {
            throw new common_1.NotFoundException(`Promotional banner with ID ${id} not found`);
        }
    }
    async getStats(id) {
        const banner = await this.findOne(id);
        const ctr = banner.impressions > 0 ? (banner.clicks / banner.impressions) * 100 : 0;
        return {
            impressions: banner.impressions,
            clicks: banner.clicks,
            ctr: parseFloat(ctr.toFixed(2)),
        };
    }
    async toggleStatus(id) {
        const banner = await this.findOne(id);
        const updatedBanner = await this.promotionalBannerModel
            .findByIdAndUpdate(id, { isActive: !banner.isActive }, { new: true })
            .exec();
        if (!updatedBanner) {
            throw new common_1.NotFoundException(`Promotional banner with ID ${id} not found`);
        }
        return updatedBanner;
    }
};
exports.PromotionalBannerService = PromotionalBannerService;
exports.PromotionalBannerService = PromotionalBannerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(promotional_banner_schema_1.PromotionalBanner.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PromotionalBannerService);
//# sourceMappingURL=promotional-banner.service.js.map