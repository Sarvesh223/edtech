import { AboutUsService } from '../services/about-us.service';
import { CreateAboutUsDto, UpdateAboutUsDto } from '../dto/about-us.dto';
import { AboutUs } from '../schemas/about-us.schema';
export declare class AboutUsController {
    private readonly aboutUsService;
    constructor(aboutUsService: AboutUsService);
    create(createAboutUsDto: CreateAboutUsDto): Promise<AboutUs>;
    findAll(): Promise<AboutUs[]>;
    findActive(): Promise<AboutUs[]>;
    findOne(id: string): Promise<AboutUs>;
    update(id: string, updateAboutUsDto: UpdateAboutUsDto): Promise<AboutUs>;
    remove(id: string): Promise<AboutUs>;
    toggleStatus(id: string): Promise<AboutUs>;
}
