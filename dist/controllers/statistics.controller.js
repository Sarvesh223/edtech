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
exports.StatisticsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const statistics_service_1 = require("../services/statistics.service");
const statistics_dto_1 = require("../dto/statistics.dto");
const statistics_schema_1 = require("../schemas/statistics.schema");
let StatisticsController = class StatisticsController {
    statisticsService;
    constructor(statisticsService) {
        this.statisticsService = statisticsService;
    }
    async create(createStatisticsDto) {
        return this.statisticsService.create(createStatisticsDto);
    }
    async findAll() {
        return this.statisticsService.findAll();
    }
    async getActive() {
        return this.statisticsService.findActive();
    }
    async getPlatformOverview() {
        return this.statisticsService.getPlatformOverview();
    }
    async findOne(id) {
        return this.statisticsService.findOne(id);
    }
    async update(id, updateStatisticsDto) {
        return this.statisticsService.update(id, updateStatisticsDto);
    }
    async updateActive(updateStatisticsDto) {
        return this.statisticsService.updateActive(updateStatisticsDto);
    }
    async remove(id) {
        await this.statisticsService.remove(id);
        return { message: 'Statistics record deleted successfully' };
    }
};
exports.StatisticsController = StatisticsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Create/Update platform statistics',
        description: 'Creates new statistics entry and sets it as active. Previous active statistics will be deactivated.'
    }),
    (0, swagger_1.ApiBody)({ type: statistics_dto_1.CreateStatisticsDto }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        description: 'Statistics created successfully',
        type: statistics_schema_1.Statistics,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Invalid input data',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [statistics_dto_1.CreateStatisticsDto]),
    __metadata("design:returntype", Promise)
], StatisticsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all statistics records' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'All statistics records retrieved successfully',
        type: [statistics_schema_1.Statistics],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StatisticsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('active'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get current active platform statistics',
        description: 'Returns the currently active statistics showing total users, instructors, country reached, and completion rate'
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Active statistics retrieved successfully',
        type: statistics_schema_1.Statistics,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StatisticsController.prototype, "getActive", null);
__decorate([
    (0, common_1.Get)('overview'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get platform overview with key metrics',
        description: 'Returns a comprehensive overview of platform statistics including last updated timestamp'
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Platform overview retrieved successfully',
        schema: {
            type: 'object',
            properties: {
                totalUsers: { type: 'number', example: 10000 },
                totalInstructors: { type: 'number', example: 250 },
                countryReached: { type: 'string', example: 'India' },
                courseCompletionRate: { type: 'number', example: 98 },
                lastUpdated: { type: 'string', format: 'date-time' }
            }
        }
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StatisticsController.prototype, "getPlatformOverview", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get specific statistics record by ID' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Statistics record ID',
        type: String,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Statistics record retrieved successfully',
        type: statistics_schema_1.Statistics,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Statistics record not found',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StatisticsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update specific statistics record' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Statistics record ID',
        type: String,
    }),
    (0, swagger_1.ApiBody)({ type: statistics_dto_1.UpdateStatisticsDto }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Statistics record updated successfully',
        type: statistics_schema_1.Statistics,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Statistics record not found',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, statistics_dto_1.UpdateStatisticsDto]),
    __metadata("design:returntype", Promise)
], StatisticsController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)('active/update'),
    (0, swagger_1.ApiOperation)({
        summary: 'Update current active statistics',
        description: 'Updates the currently active statistics record directly'
    }),
    (0, swagger_1.ApiBody)({ type: statistics_dto_1.UpdateStatisticsDto }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Active statistics updated successfully',
        type: statistics_schema_1.Statistics,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'No active statistics found',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [statistics_dto_1.UpdateStatisticsDto]),
    __metadata("design:returntype", Promise)
], StatisticsController.prototype, "updateActive", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete statistics record' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Statistics record ID',
        type: String,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Statistics record deleted successfully',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Statistics record not found',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StatisticsController.prototype, "remove", null);
exports.StatisticsController = StatisticsController = __decorate([
    (0, swagger_1.ApiTags)('Statistics'),
    (0, common_1.Controller)('statistics'),
    __metadata("design:paramtypes", [statistics_service_1.StatisticsService])
], StatisticsController);
//# sourceMappingURL=statistics.controller.js.map