import { StatisticsService } from '../services/statistics.service';
import { CreateStatisticsDto, UpdateStatisticsDto } from '../dto/statistics.dto';
import { Statistics } from '../schemas/statistics.schema';
export declare class StatisticsController {
    private readonly statisticsService;
    constructor(statisticsService: StatisticsService);
    create(createStatisticsDto: CreateStatisticsDto): Promise<Statistics>;
    findAll(): Promise<Statistics[]>;
    getActive(): Promise<Statistics>;
    getPlatformOverview(): Promise<{
        totalUsers: number;
        totalInstructors: number;
        countryReached: string;
        courseCompletionRate: number;
    }>;
    findOne(id: string): Promise<Statistics>;
    update(id: string, updateStatisticsDto: UpdateStatisticsDto): Promise<Statistics>;
    updateActive(updateStatisticsDto: UpdateStatisticsDto): Promise<Statistics>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
