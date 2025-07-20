import { Model } from 'mongoose';
import { AboutUs, AboutUsDocument } from '../schemas/about-us.schema';
import { CreateAboutUsDto, UpdateAboutUsDto } from '../dto/about-us.dto';
export declare class AboutUsService {
    private aboutUsModel;
    constructor(aboutUsModel: Model<AboutUsDocument>);
    create(createAboutUsDto: CreateAboutUsDto): Promise<AboutUs>;
    findAll(): Promise<AboutUs[]>;
    findActive(): Promise<AboutUs[]>;
    findOne(id: string): Promise<AboutUs>;
    update(id: string, updateAboutUsDto: UpdateAboutUsDto): Promise<AboutUs>;
    remove(id: string): Promise<AboutUs>;
    toggleStatus(id: string): Promise<AboutUs>;
}
