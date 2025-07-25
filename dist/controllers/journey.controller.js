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
exports.JourneyController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const journey_service_1 = require("../services/journey.service");
const journey_dto_1 = require("../dto/journey.dto");
const journey_schema_1 = require("../schemas/journey.schema");
let JourneyController = class JourneyController {
    journeyService;
    constructor(journeyService) {
        this.journeyService = journeyService;
    }
    async create(createJourneyDto) {
        return this.journeyService.create(createJourneyDto);
    }
    async findAll(year) {
        if (year) {
            return this.journeyService.findByYear(year);
        }
        return this.journeyService.findAll();
    }
    async getTimeline() {
        return this.journeyService.getJourneyTimeline();
    }
    async findOne(id) {
        return this.journeyService.findOne(id);
    }
    async update(id, updateJourneyDto) {
        return this.journeyService.update(id, updateJourneyDto);
    }
    async remove(id) {
        await this.journeyService.remove(id);
        return { message: 'Journey milestone deleted successfully' };
    }
};
exports.JourneyController = JourneyController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new journey milestone' }),
    (0, swagger_1.ApiBody)({ type: journey_dto_1.CreateJourneyDto }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        description: 'Journey milestone created successfully',
        type: journey_schema_1.Journey,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Invalid input data',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [journey_dto_1.CreateJourneyDto]),
    __metadata("design:returntype", Promise)
], JourneyController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all journey milestones' }),
    (0, swagger_1.ApiQuery)({
        name: 'year',
        required: false,
        description: 'Filter by specific year',
        type: Number,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Journey milestones retrieved successfully',
        type: [journey_schema_1.Journey],
    }),
    __param(0, (0, common_1.Query)('year')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], JourneyController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('timeline'),
    (0, swagger_1.ApiOperation)({ summary: 'Get complete journey timeline sorted by year' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Journey timeline retrieved successfully',
        type: [journey_schema_1.Journey],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JourneyController.prototype, "getTimeline", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a specific journey milestone by ID' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Journey milestone ID',
        type: String,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Journey milestone retrieved successfully',
        type: journey_schema_1.Journey,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Journey milestone not found',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], JourneyController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a journey milestone' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Journey milestone ID',
        type: String,
    }),
    (0, swagger_1.ApiBody)({ type: journey_dto_1.UpdateJourneyDto }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Journey milestone updated successfully',
        type: journey_schema_1.Journey,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Journey milestone not found',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, journey_dto_1.UpdateJourneyDto]),
    __metadata("design:returntype", Promise)
], JourneyController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a journey milestone' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Journey milestone ID',
        type: String,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Journey milestone deleted successfully',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Journey milestone not found',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], JourneyController.prototype, "remove", null);
exports.JourneyController = JourneyController = __decorate([
    (0, swagger_1.ApiTags)('Journey'),
    (0, common_1.Controller)('journey'),
    __metadata("design:paramtypes", [journey_service_1.JourneyService])
], JourneyController);
//# sourceMappingURL=journey.controller.js.map