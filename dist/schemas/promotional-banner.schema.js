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
exports.PromotionalBannerSchema = exports.PromotionalBanner = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let PromotionalBanner = class PromotionalBanner {
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
    impressions;
    clicks;
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
    updatedBy;
};
exports.PromotionalBanner = PromotionalBanner;
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true }),
    __metadata("design:type", String)
], PromotionalBanner.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true }),
    __metadata("design:type", String)
], PromotionalBanner.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], PromotionalBanner.prototype, "imageUrl", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], PromotionalBanner.prototype, "ctaText", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], PromotionalBanner.prototype, "ctaUrl", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: ['top', 'center', 'bottom'], default: 'center' }),
    __metadata("design:type", String)
], PromotionalBanner.prototype, "position", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: true }),
    __metadata("design:type", Boolean)
], PromotionalBanner.prototype, "isActive", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: 0 }),
    __metadata("design:type", Number)
], PromotionalBanner.prototype, "priority", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", Date)
], PromotionalBanner.prototype, "startDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", Date)
], PromotionalBanner.prototype, "endDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: ['popup', 'banner', 'toast'], default: 'popup' }),
    __metadata("design:type", String)
], PromotionalBanner.prototype, "displayType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: 5000 }),
    __metadata("design:type", Number)
], PromotionalBanner.prototype, "autoCloseDelay", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: true }),
    __metadata("design:type", Boolean)
], PromotionalBanner.prototype, "showCloseButton", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: 0 }),
    __metadata("design:type", Number)
], PromotionalBanner.prototype, "impressions", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: 0 }),
    __metadata("design:type", Number)
], PromotionalBanner.prototype, "clicks", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], PromotionalBanner.prototype, "targetAudience", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], PromotionalBanner.prototype, "deviceType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], PromotionalBanner.prototype, "backgroundColor", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], PromotionalBanner.prototype, "textColor", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], PromotionalBanner.prototype, "borderColor", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", Number)
], PromotionalBanner.prototype, "borderRadius", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", Number)
], PromotionalBanner.prototype, "maxWidth", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", Number)
], PromotionalBanner.prototype, "maxHeight", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", Array)
], PromotionalBanner.prototype, "tags", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], PromotionalBanner.prototype, "createdBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], PromotionalBanner.prototype, "updatedBy", void 0);
exports.PromotionalBanner = PromotionalBanner = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        collection: 'promotional_banners',
    })
], PromotionalBanner);
exports.PromotionalBannerSchema = mongoose_1.SchemaFactory.createForClass(PromotionalBanner);
//# sourceMappingURL=promotional-banner.schema.js.map