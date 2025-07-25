import { InstructorService } from '../services/instructor.service';
import { CreateInstructorDto, UpdateInstructorDto } from '../dto/instructor.dto';
export declare class InstructorController {
    private readonly instructorService;
    constructor(instructorService: InstructorService);
    create(createInstructorDto: CreateInstructorDto): Promise<import("../schemas/instructor.schema").Instructor>;
    findAll(name?: string, designation?: string): Promise<import("../schemas/instructor.schema").Instructor[]>;
    findOne(id: string): Promise<import("../schemas/instructor.schema").Instructor>;
    update(id: string, updateInstructorDto: UpdateInstructorDto): Promise<import("../schemas/instructor.schema").Instructor>;
    remove(id: string): Promise<void>;
}
