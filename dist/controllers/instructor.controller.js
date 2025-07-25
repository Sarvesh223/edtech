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
exports.InstructorController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const instructor_service_1 = require("../services/instructor.service");
const instructor_dto_1 = require("../dto/instructor.dto");
let InstructorController = class InstructorController {
    instructorService;
    constructor(instructorService) {
        this.instructorService = instructorService;
    }
    async create(createInstructorDto) {
        return await this.instructorService.create(createInstructorDto);
    }
    async findAll(name, designation) {
        if (name) {
            return await this.instructorService.findByName(name);
        }
        if (designation) {
            return await this.instructorService.findByDesignation(designation);
        }
        return await this.instructorService.findAll();
    }
    async findOne(id) {
        return await this.instructorService.findOne(id);
    }
    async update(id, updateInstructorDto) {
        return await this.instructorService.update(id, updateInstructorDto);
    }
    async remove(id) {
        await this.instructorService.remove(id);
    }
};
exports.InstructorController = InstructorController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new instructor' }),
    (0, swagger_1.ApiBody)({ type: instructor_dto_1.CreateInstructorDto }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Instructor created successfully',
        type: instructor_dto_1.InstructorResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Bad request - Invalid input data',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [instructor_dto_1.CreateInstructorDto]),
    __metadata("design:returntype", Promise)
], InstructorController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all instructors' }),
    (0, swagger_1.ApiQuery)({
        name: 'name',
        required: false,
        description: 'Filter by instructor name',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'designation',
        required: false,
        description: 'Filter by instructor designation',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of instructors retrieved successfully',
        type: [instructor_dto_1.InstructorResponseDto],
    }),
    __param(0, (0, common_1.Query)('name')),
    __param(1, (0, common_1.Query)('designation')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], InstructorController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get an instructor by ID' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Instructor ID',
        example: '507f1f77bcf86cd799439011',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Instructor retrieved successfully',
        type: instructor_dto_1.InstructorResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Instructor not found',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InstructorController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update an instructor' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Instructor ID',
        example: '507f1f77bcf86cd799439011',
    }),
    (0, swagger_1.ApiBody)({ type: instructor_dto_1.UpdateInstructorDto }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Instructor updated successfully',
        type: instructor_dto_1.InstructorResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Instructor not found',
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Bad request - Invalid input data',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, instructor_dto_1.UpdateInstructorDto]),
    __metadata("design:returntype", Promise)
], InstructorController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({ summary: 'Delete an instructor' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Instructor ID',
        example: '507f1f77bcf86cd799439011',
    }),
    (0, swagger_1.ApiResponse)({
        status: 204,
        description: 'Instructor deleted successfully',
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Instructor not found',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InstructorController.prototype, "remove", null);
exports.InstructorController = InstructorController = __decorate([
    (0, swagger_1.ApiTags)('instructors'),
    (0, common_1.Controller)('instructors'),
    __metadata("design:paramtypes", [instructor_service_1.InstructorService])
], InstructorController);
//# sourceMappingURL=instructor.controller.js.map