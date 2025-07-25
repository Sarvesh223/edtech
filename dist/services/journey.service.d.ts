import { Model } from 'mongoose';
import { Journey, JourneyDocument } from '../schemas/journey.schema';
import { CreateJourneyDto, UpdateJourneyDto } from '../dto/journey.dto';
export declare class JourneyService {
    private journeyModel;
    constructor(journeyModel: Model<JourneyDocument>);
    create(createJourneyDto: CreateJourneyDto): Promise<Journey>;
    findAll(): Promise<Journey[]>;
    findByYear(year: number): Promise<Journey[]>;
    findOne(id: string): Promise<Journey>;
    update(id: string, updateJourneyDto: UpdateJourneyDto): Promise<Journey>;
    remove(id: string): Promise<void>;
    getJourneyTimeline(): Promise<Journey[]>;
}
