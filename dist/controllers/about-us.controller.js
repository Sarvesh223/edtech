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
exports.AboutUsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const about_us_service_1 = require("../services/about-us.service");
const about_us_dto_1 = require("../dto/about-us.dto");
const about_us_schema_1 = require("../schemas/about-us.schema");
let AboutUsController = class AboutUsController {
    aboutUsService;
    constructor(aboutUsService) {
        this.aboutUsService = aboutUsService;
    }
    async create(createAboutUsDto) {
        return this.aboutUsService.create(createAboutUsDto);
    }
    async findAll() {
        return this.aboutUsService.findAll();
    }
    async findActive() {
        return this.aboutUsService.findActive();
    }
    async findOne(id) {
        return this.aboutUsService.findOne(id);
    }
    async update(id, updateAboutUsDto) {
        return this.aboutUsService.update(id, updateAboutUsDto);
    }
    async remove(id) {
        return this.aboutUsService.remove(id);
    }
    async toggleStatus(id) {
        return this.aboutUsService.toggleStatus(id);
    }
};
exports.AboutUsController = AboutUsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new about us entry' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'About us entry created successfully',
        type: about_us_schema_1.AboutUs,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid input data' }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'About us entry already exists' }),
    (0, swagger_1.ApiBody)({ type: about_us_dto_1.CreateAboutUsDto }),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [about_us_dto_1.CreateAboutUsDto]),
    __metadata("design:returntype", Promise)
], AboutUsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all about us entries' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of all about us entries',
        type: [about_us_schema_1.AboutUs],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AboutUsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('active'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all active about us entries' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of active about us entries',
        type: [about_us_schema_1.AboutUs],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AboutUsController.prototype, "findActive", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a specific about us entry by ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'About us entry found',
        type: about_us_schema_1.AboutUs,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'About us entry not found' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'About us entry ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AboutUsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update an about us entry' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'About us entry updated successfully',
        type: about_us_schema_1.AboutUs,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'About us entry not found' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid input data' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'About us entry ID' }),
    (0, swagger_1.ApiBody)({ type: about_us_dto_1.UpdateAboutUsDto }),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, about_us_dto_1.UpdateAboutUsDto]),
    __metadata("design:returntype", Promise)
], AboutUsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete an about us entry' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'About us entry deleted successfully',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'About us entry not found' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'About us entry ID' }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AboutUsController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)(':id/toggle-status'),
    (0, swagger_1.ApiOperation)({ summary: 'Toggle active status of an about us entry' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'About us entry status toggled successfully',
        type: about_us_schema_1.AboutUs,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'About us entry not found' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'About us entry ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AboutUsController.prototype, "toggleStatus", null);
exports.AboutUsController = AboutUsController = __decorate([
    (0, swagger_1.ApiTags)('About Us'),
    (0, common_1.Controller)('about-us'),
    __metadata("design:paramtypes", [about_us_service_1.AboutUsService])
], AboutUsController);
//# sourceMappingURL=about-us.controller.js.map