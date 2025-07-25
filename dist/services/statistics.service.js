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
exports.StatisticsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const statistics_schema_1 = require("../schemas/statistics.schema");
let StatisticsService = class StatisticsService {
    statisticsModel;
    constructor(statisticsModel) {
        this.statisticsModel = statisticsModel;
    }
    async create(createStatisticsDto) {
        await this.statisticsModel.updateMany({ isActive: true }, { isActive: false });
        const createdStatistics = new this.statisticsModel({
            ...createStatisticsDto,
            isActive: true,
        });
        return createdStatistics.save();
    }
    async findAll() {
        return this.statisticsModel.find().sort({ createdAt: -1 }).exec();
    }
    async findActive() {
        const activeStats = await this.statisticsModel
            .findOne({ isActive: true })
            .exec();
        if (!activeStats) {
            return {
                totalUsers: 0,
                totalInstructors: 0,
                countryReached: 'India',
                courseCompletionRate: 98,
                isActive: true,
            };
        }
        return activeStats;
    }
    async findOne(id) {
        const statistics = await this.statisticsModel.findById(id).exec();
        if (!statistics) {
            throw new common_1.NotFoundException(`Statistics with ID ${id} not found`);
        }
        return statistics;
    }
    async update(id, updateStatisticsDto) {
        const updatedStatistics = await this.statisticsModel
            .findByIdAndUpdate(id, updateStatisticsDto, { new: true })
            .exec();
        if (!updatedStatistics) {
            throw new common_1.NotFoundException(`Statistics with ID ${id} not found`);
        }
        return updatedStatistics;
    }
    async updateActive(updateStatisticsDto) {
        const activeStats = await this.statisticsModel
            .findOne({ isActive: true })
            .exec();
        if (!activeStats) {
            throw new common_1.NotFoundException('No active statistics found');
        }
        return this.update(String(activeStats._id), updateStatisticsDto);
    }
    async remove(id) {
        const result = await this.statisticsModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new common_1.NotFoundException(`Statistics with ID ${id} not found`);
        }
    }
    async getPlatformOverview() {
        const activeStats = await this.findActive();
        return {
            totalUsers: activeStats.totalUsers,
            totalInstructors: activeStats.totalInstructors,
            countryReached: activeStats.countryReached,
            courseCompletionRate: activeStats.courseCompletionRate,
        };
    }
};
exports.StatisticsService = StatisticsService;
exports.StatisticsService = StatisticsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(statistics_schema_1.Statistics.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], StatisticsService);
//# sourceMappingURL=statistics.service.js.map