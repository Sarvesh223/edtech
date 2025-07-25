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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionalBannerStatsDto = exports.PromotionalBannerQueryDto = exports.UpdatePromotionalBannerDto = exports.CreatePromotionalBannerDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class CreatePromotionalBannerDto {
    title;
    description;
    imageUrl;
    ctaText;
    ctaUrl;
    position;
    isActive;
    priority;
    startDate;
    endDate;
    displayType;
    autoCloseDelay;
    showCloseButton;
    targetAudience;
    deviceType;
    backgroundColor;
    textColor;
    borderColor;
    borderRadius;
    maxWidth;
    maxHeight;
    tags;
    createdBy;
}
exports.CreatePromotionalBannerDto = CreatePromotionalBannerDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Banner title', example: 'Limited Time Offer!' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePromotionalBannerDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Banner description', example: 'Get 50% off on all courses this weekend!' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePromotionalBannerDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Banner image URL', example: 'https://example.com/banner.jpg' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], CreatePromotionalBannerDto.prototype, "imageUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Call-to-action text', example: 'Shop Now' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePromotionalBannerDto.prototype, "ctaText", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Call-to-action URL', example: 'https://example.com/shop' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], CreatePromotionalBannerDto.prototype, "ctaUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Banner position', enum: ['top', 'center', 'bottom'], default: 'center' }),
    (0, class_validator_1.IsEnum)(['top', 'center', 'bottom']),
    __metadata("design:type", String)
], CreatePromotionalBannerDto.prototype, "position", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Is banner active', default: true }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_transformer_1.Transform)(({ value }) => value === 'true' || value === true),
    __metadata("design:type", Boolean)
], CreatePromotionalBannerDto.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Banner priority (higher number = higher priority)', default: 0 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreatePromotionalBannerDto.prototype, "priority", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Banner start date', example: '2024-01-01T00:00:00Z' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], CreatePromotionalBannerDto.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Banner end date', example: '2024-12-31T23:59:59Z' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], CreatePromotionalBannerDto.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Display type', enum: ['popup', 'banner', 'toast'], default: 'popup' }),
    (0, class_validator_1.IsEnum)(['popup', 'banner', 'toast']),
    __metadata("design:type", String)
], CreatePromotionalBannerDto.prototype, "displayType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Auto close delay in milliseconds', default: 5000 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.Min)(1000),
    (0, class_validator_1.Max)(30000),
    __metadata("design:type", Number)
], CreatePromotionalBannerDto.prototype, "autoCloseDelay", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Show close button', default: true }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_transformer_1.Transform)(({ value }) => value === 'true' || value === true),
    __metadata("design:type", Boolean)
], CreatePromotionalBannerDto.prototype, "showCloseButton", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Target audience', example: 'students' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePromotionalBannerDto.prototype, "targetAudience", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Device type', example: 'all' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePromotionalBannerDto.prototype, "deviceType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Background color', example: '#ffffff' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePromotionalBannerDto.prototype, "backgroundColor", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Text color', example: '#000000' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePromotionalBannerDto.prototype, "textColor", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Border color', example: '#cccccc' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePromotionalBannerDto.prototype, "borderColor", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Border radius in pixels', example: 8 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreatePromotionalBannerDto.prototype, "borderRadius", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Maximum width in pixels', example: 600 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.Min)(100),
    __metadata("design:type", Number)
], CreatePromotionalBannerDto.prototype, "maxWidth", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Maximum height in pixels', example: 400 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.Min)(100),
    __metadata("design:type", Number)
], CreatePromotionalBannerDto.prototype, "maxHeight", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tags for categorization', example: ['sale', 'courses'] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreatePromotionalBannerDto.prototype, "tags", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Created by user ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePromotionalBannerDto.prototype, "createdBy", void 0);
class UpdatePromotionalBannerDto {
    title;
    description;
    imageUrl;
    ctaText;
    ctaUrl;
    position;
    isActive;
    priority;
    startDate;
    endDate;
    displayType;
    autoCloseDelay;
    showCloseButton;
    targetAudience;
    deviceType;
    backgroundColor;
    textColor;
    borderColor;
    borderRadius;
    maxWidth;
    maxHeight;
    tags;
    updatedBy;
}
exports.UpdatePromotionalBannerDto = UpdatePromotionalBannerDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Banner title', example: 'Updated Offer!' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePromotionalBannerDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Banner description', example: 'Updated description' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePromotionalBannerDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Banner image URL', example: 'https://example.com/new-banner.jpg' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], UpdatePromotionalBannerDto.prototype, "imageUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Call-to-action text', example: 'Learn More' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePromotionalBannerDto.prototype, "ctaText", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Call-to-action URL', example: 'https://example.com/learn' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], UpdatePromotionalBannerDto.prototype, "ctaUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Banner position', enum: ['top', 'center', 'bottom'] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['top', 'center', 'bottom']),
    __metadata("design:type", String)
], UpdatePromotionalBannerDto.prototype, "position", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Is banner active' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_transformer_1.Transform)(({ value }) => value === 'true' || value === true),
    __metadata("design:type", Boolean)
], UpdatePromotionalBannerDto.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Banner priority' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpdatePromotionalBannerDto.prototype, "priority", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Banner start date' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], UpdatePromotionalBannerDto.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Banner end date' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], UpdatePromotionalBannerDto.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Display type', enum: ['popup', 'banner', 'toast'] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['popup', 'banner', 'toast']),
    __metadata("design:type", String)
], UpdatePromotionalBannerDto.prototype, "displayType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Auto close delay in milliseconds' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.Min)(1000),
    (0, class_validator_1.Max)(30000),
    __metadata("design:type", Number)
], UpdatePromotionalBannerDto.prototype, "autoCloseDelay", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Show close button' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_transformer_1.Transform)(({ value }) => value === 'true' || value === true),
    __metadata("design:type", Boolean)
], UpdatePromotionalBannerDto.prototype, "showCloseButton", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Target audience' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePromotionalBannerDto.prototype, "targetAudience", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Device type' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePromotionalBannerDto.prototype, "deviceType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Background color' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePromotionalBannerDto.prototype, "backgroundColor", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Text color' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePromotionalBannerDto.prototype, "textColor", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Border color' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePromotionalBannerDto.prototype, "borderColor", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Border radius in pixels' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpdatePromotionalBannerDto.prototype, "borderRadius", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Maximum width in pixels' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.Min)(100),
    __metadata("design:type", Number)
], UpdatePromotionalBannerDto.prototype, "maxWidth", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Maximum height in pixels' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.Min)(100),
    __metadata("design:type", Number)
], UpdatePromotionalBannerDto.prototype, "maxHeight", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tags for categorization' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], UpdatePromotionalBannerDto.prototype, "tags", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Updated by user ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePromotionalBannerDto.prototype, "updatedBy", void 0);
class PromotionalBannerQueryDto {
    isActive;
    displayType;
    position;
    targetAudience;
    deviceType;
    page = 1;
    limit = 10;
    sortBy = 'priority';
    sortOrder = 'desc';
}
exports.PromotionalBannerQueryDto = PromotionalBannerQueryDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by active status' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_transformer_1.Transform)(({ value }) => value === 'true' || value === true),
    __metadata("design:type", Boolean)
], PromotionalBannerQueryDto.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by display type' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['popup', 'banner', 'toast']),
    __metadata("design:type", String)
], PromotionalBannerQueryDto.prototype, "displayType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by position' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['top', 'center', 'bottom']),
    __metadata("design:type", String)
], PromotionalBannerQueryDto.prototype, "position", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by target audience' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PromotionalBannerQueryDto.prototype, "targetAudience", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by device type' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PromotionalBannerQueryDto.prototype, "deviceType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Page number for pagination', default: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], PromotionalBannerQueryDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Number of items per page', default: 10 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(100),
    __metadata("design:type", Number)
], PromotionalBannerQueryDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Sort field', default: 'priority' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PromotionalBannerQueryDto.prototype, "sortBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Sort order', enum: ['asc', 'desc'], default: 'desc' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['asc', 'desc']),
    __metadata("design:type", String)
], PromotionalBannerQueryDto.prototype, "sortOrder", void 0);
class PromotionalBannerStatsDto {
    bannerId;
    action;
}
exports.PromotionalBannerStatsDto = PromotionalBannerStatsDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Banner ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PromotionalBannerStatsDto.prototype, "bannerId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Action type', enum: ['impression', 'click'] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['impression', 'click']),
    __metadata("design:type", String)
], PromotionalBannerStatsDto.prototype, "action", void 0);
//# sourceMappingURL=promotional-banner.dto.js.map