import { JourneyService } from '../services/journey.service';
import { CreateJourneyDto, UpdateJourneyDto } from '../dto/journey.dto';
import { Journey } from '../schemas/journey.schema';
export declare class JourneyController {
    private readonly journeyService;
    constructor(journeyService: JourneyService);
    create(createJourneyDto: CreateJourneyDto): Promise<Journey>;
    findAll(year?: number): Promise<Journey[]>;
    getTimeline(): Promise<Journey[]>;
    findOne(id: string): Promise<Journey>;
    update(id: string, updateJourneyDto: UpdateJourneyDto): Promise<Journey>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
