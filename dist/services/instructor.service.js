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
exports.InstructorService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const instructor_schema_1 = require("../schemas/instructor.schema");
let InstructorService = class InstructorService {
    instructorModel;
    constructor(instructorModel) {
        this.instructorModel = instructorModel;
    }
    async create(createInstructorDto) {
        try {
            const instructor = new this.instructorModel(createInstructorDto);
            return await instructor.save();
        }
        catch (error) {
            if (error.code === 11000) {
                throw new common_1.BadRequestException('Instructor with this name already exists');
            }
            throw new common_1.BadRequestException('Failed to create instructor');
        }
    }
    async findAll() {
        return await this.instructorModel.find().exec();
    }
    async findOne(id) {
        const instructor = await this.instructorModel.findById(id).exec();
        if (!instructor) {
            throw new common_1.NotFoundException(`Instructor with ID ${id} not found`);
        }
        return instructor;
    }
    async update(id, updateInstructorDto) {
        try {
            const instructor = await this.instructorModel
                .findByIdAndUpdate(id, updateInstructorDto, { new: true })
                .exec();
            if (!instructor) {
                throw new common_1.NotFoundException(`Instructor with ID ${id} not found`);
            }
            return instructor;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.BadRequestException('Failed to update instructor');
        }
    }
    async remove(id) {
        const result = await this.instructorModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new common_1.NotFoundException(`Instructor with ID ${id} not found`);
        }
    }
    async findByName(name) {
        return await this.instructorModel
            .find({ name: { $regex: name, $options: 'i' } })
            .exec();
    }
    async findByDesignation(designation) {
        return await this.instructorModel
            .find({ designation: { $regex: designation, $options: 'i' } })
            .exec();
    }
};
exports.InstructorService = InstructorService;
exports.InstructorService = InstructorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(instructor_schema_1.Instructor.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], InstructorService);
//# sourceMappingURL=instructor.service.js.map