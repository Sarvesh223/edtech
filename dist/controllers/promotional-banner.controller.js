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
exports.PromotionalBannerController = void 0;
const common_1 = require("@nestjs/common");
const promotional_banner_service_1 = require("../services/promotional-banner.service");
const promotional_banner_dto_1 = require("../dto/promotional-banner.dto");
const swagger_1 = require("@nestjs/swagger");
let PromotionalBannerController = class PromotionalBannerController {
    promotionalBannerService;
    constructor(promotionalBannerService) {
        this.promotionalBannerService = promotionalBannerService;
    }
    create(createPromotionalBannerDto) {
        return this.promotionalBannerService.create(createPromotionalBannerDto);
    }
    findAll(query) {
        return this.promotionalBannerService.findAll(query);
    }
    findActive() {
        return this.promotionalBannerService.findActive();
    }
    findOne(id) {
        return this.promotionalBannerService.findOne(id);
    }
    update(id, updatePromotionalBannerDto) {
        return this.promotionalBannerService.update(id, updatePromotionalBannerDto);
    }
    remove(id) {
        return this.promotionalBannerService.remove(id);
    }
    updateStats(id, action) {
        return this.promotionalBannerService.updateStats(id, action);
    }
    getStats(id) {
        return this.promotionalBannerService.getStats(id);
    }
    toggleStatus(id) {
        return this.promotionalBannerService.toggleStatus(id);
    }
};
exports.PromotionalBannerController = PromotionalBannerController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new promotional banner' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        description: 'Banner created successfully',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Invalid input data',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [promotional_banner_dto_1.CreatePromotionalBannerDto]),
    __metadata("design:returntype", void 0)
], PromotionalBannerController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Get all promotional banners with filtering and pagination',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Banners retrieved successfully',
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [promotional_banner_dto_1.PromotionalBannerQueryDto]),
    __metadata("design:returntype", void 0)
], PromotionalBannerController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('active'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all active promotional banners' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Active banners retrieved successfully',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PromotionalBannerController.prototype, "findActive", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a promotional banner by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Banner ID' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Banner retrieved successfully',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Banner not found',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PromotionalBannerController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a promotional banner' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Banner ID' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Banner updated successfully',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Banner not found',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Invalid input data',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, promotional_banner_dto_1.UpdatePromotionalBannerDto]),
    __metadata("design:returntype", void 0)
], PromotionalBannerController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a promotional banner' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Banner ID' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NO_CONTENT,
        description: 'Banner deleted successfully',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Banner not found',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PromotionalBannerController.prototype, "remove", null);
__decorate([
    (0, common_1.Put)(':id/stats/:action'),
    (0, swagger_1.ApiOperation)({ summary: 'Update banner statistics (impression or click)' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Banner ID' }),
    (0, swagger_1.ApiParam)({
        name: 'action',
        enum: ['impression', 'click'],
        description: 'Action type',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Stats updated successfully',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Banner not found',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('action')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], PromotionalBannerController.prototype, "updateStats", null);
__decorate([
    (0, common_1.Get)(':id/stats'),
    (0, swagger_1.ApiOperation)({ summary: 'Get banner statistics' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Banner ID' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Stats retrieved successfully',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Banner not found',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PromotionalBannerController.prototype, "getStats", null);
__decorate([
    (0, common_1.Put)(':id/toggle-status'),
    (0, swagger_1.ApiOperation)({ summary: 'Toggle banner active status' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Banner ID' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Status toggled successfully',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Banner not found',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PromotionalBannerController.prototype, "toggleStatus", null);
exports.PromotionalBannerController = PromotionalBannerController = __decorate([
    (0, swagger_1.ApiTags)('promotional-banners'),
    (0, common_1.Controller)('promotional-banners'),
    __metadata("design:paramtypes", [promotional_banner_service_1.PromotionalBannerService])
], PromotionalBannerController);
//# sourceMappingURL=promotional-banner.controller.js.map