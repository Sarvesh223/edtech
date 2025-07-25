import { Model } from 'mongoose';
import { Instructor, InstructorDocument } from '../schemas/instructor.schema';
import { CreateInstructorDto, UpdateInstructorDto } from '../dto/instructor.dto';
export declare class InstructorService {
    private instructorModel;
    constructor(instructorModel: Model<InstructorDocument>);
    create(createInstructorDto: CreateInstructorDto): Promise<Instructor>;
    findAll(): Promise<Instructor[]>;
    findOne(id: string): Promise<Instructor>;
    update(id: string, updateInstructorDto: UpdateInstructorDto): Promise<Instructor>;
    remove(id: string): Promise<void>;
    findByName(name: string): Promise<Instructor[]>;
    findByDesignation(designation: string): Promise<Instructor[]>;
}
