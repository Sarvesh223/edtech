import { Model } from 'mongoose';
import { Statistics, StatisticsDocument } from '../schemas/statistics.schema';
import { CreateStatisticsDto, UpdateStatisticsDto } from '../dto/statistics.dto';
export declare class StatisticsService {
    private statisticsModel;
    constructor(statisticsModel: Model<StatisticsDocument>);
    create(createStatisticsDto: CreateStatisticsDto): Promise<Statistics>;
    findAll(): Promise<Statistics[]>;
    findActive(): Promise<Statistics>;
    findOne(id: string): Promise<Statistics>;
    update(id: string, updateStatisticsDto: UpdateStatisticsDto): Promise<Statistics>;
    updateActive(updateStatisticsDto: UpdateStatisticsDto): Promise<Statistics>;
    remove(id: string): Promise<void>;
    getPlatformOverview(): Promise<{
        totalUsers: number;
        totalInstructors: number;
        countryReached: string;
        courseCompletionRate: number;
    }>;
}
