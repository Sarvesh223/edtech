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
exports.PartnerController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const partner_service_1 = require("../services/partner.service");
const partner_dto_1 = require("../dto/partner.dto");
let PartnerController = class PartnerController {
    partnerService;
    constructor(partnerService) {
        this.partnerService = partnerService;
    }
    async create(createPartnerDto) {
        return await this.partnerService.create(createPartnerDto);
    }
    async findAll(includeInactive) {
        return await this.partnerService.findAll(includeInactive);
    }
    async getActivePartners() {
        return await this.partnerService.getActivePartners();
    }
    async findOne(id) {
        return await this.partnerService.findOne(id);
    }
    async update(id, updatePartnerDto) {
        return await this.partnerService.update(id, updatePartnerDto);
    }
    async remove(id) {
        await this.partnerService.remove(id);
    }
    async toggleStatus(id) {
        return await this.partnerService.toggleStatus(id);
    }
    async reorderPartners(partnerIds) {
        return await this.partnerService.reorderPartners(partnerIds);
    }
};
exports.PartnerController = PartnerController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new partner' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Partner created successfully',
        type: partner_dto_1.PartnerResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [partner_dto_1.CreatePartnerDto]),
    __metadata("design:returntype", Promise)
], PartnerController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all partners' }),
    (0, swagger_1.ApiQuery)({
        name: 'includeInactive',
        required: false,
        description: 'Include inactive partners in the response',
        type: Boolean,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Partners retrieved successfully',
        type: [partner_dto_1.PartnerResponseDto],
    }),
    __param(0, (0, common_1.Query)('includeInactive')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], PartnerController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('active'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all active partners for public display' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Active partners retrieved successfully',
        type: [partner_dto_1.PartnerResponseDto],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PartnerController.prototype, "getActivePartners", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a partner by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Partner ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Partner retrieved successfully',
        type: partner_dto_1.PartnerResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Partner not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PartnerController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a partner' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Partner ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Partner updated successfully',
        type: partner_dto_1.PartnerResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Partner not found' }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, partner_dto_1.UpdatePartnerDto]),
    __metadata("design:returntype", Promise)
], PartnerController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a partner' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Partner ID' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Partner deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Partner not found' }),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PartnerController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)(':id/toggle-status'),
    (0, swagger_1.ApiOperation)({ summary: 'Toggle partner active/inactive status' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Partner ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Partner status toggled successfully',
        type: partner_dto_1.PartnerResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Partner not found' }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PartnerController.prototype, "toggleStatus", null);
__decorate([
    (0, common_1.Patch)('reorder'),
    (0, swagger_1.ApiOperation)({ summary: 'Reorder partners by providing array of IDs' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Partners reordered successfully',
        type: [partner_dto_1.PartnerResponseDto],
    }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)('partnerIds')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], PartnerController.prototype, "reorderPartners", null);
exports.PartnerController = PartnerController = __decorate([
    (0, swagger_1.ApiTags)('Partners'),
    (0, common_1.Controller)('partners'),
    __metadata("design:paramtypes", [partner_service_1.PartnerService])
], PartnerController);
//# sourceMappingURL=partner.controller.js.map