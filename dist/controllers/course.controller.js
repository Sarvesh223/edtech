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
exports.CourseController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const course_service_1 = require("../services/course.service");
const create_course_dto_1 = require("../dto/create-course.dto");
const query_course_dto_1 = require("../dto/query-course.dto");
let CourseController = class CourseController {
    courseService;
    constructor(courseService) {
        this.courseService = courseService;
    }
    async getAllCourses(queryDto) {
        return this.courseService.getAllCourses(queryDto);
    }
    async getCoursesByCategory(categorySlug, queryDto) {
        return this.courseService.getCoursesByCategory(categorySlug, queryDto);
    }
    async getCourseSyllabus(id) {
        return this.courseService.getCourseSyllabus(id);
    }
    async getCourseProjects(id) {
        return this.courseService.getCourseProjects(id);
    }
    async getCoursePhases(id) {
        return this.courseService.getCoursePhases(id);
    }
    async getCourseMarketInsights(id) {
        return this.courseService.getCourseMarketInsights(id);
    }
    async getCourseFullDetails(id) {
        return this.courseService.getCourseFullDetails(id);
    }
    async getCourseBySlug(slug) {
        return this.courseService.getCourseBySlug(slug);
    }
    async createCourse(createCourseDto) {
        return this.courseService.createCourse(createCourseDto);
    }
    async updateCourse(id, updateCourseDto) {
        return this.courseService.updateCourse(id, updateCourseDto);
    }
    async deleteCourse(id) {
        return this.courseService.deleteCourse(id);
    }
};
exports.CourseController = CourseController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all courses with filtering and pagination' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of courses with pagination info',
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [query_course_dto_1.QueryCourseDto]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "getAllCourses", null);
__decorate([
    (0, common_1.Get)('category/:categorySlug'),
    (0, swagger_1.ApiOperation)({ summary: 'Get courses by category' }),
    (0, swagger_1.ApiParam)({ name: 'categorySlug', description: 'Category slug' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of courses in the category' }),
    __param(0, (0, common_1.Param)('categorySlug')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, query_course_dto_1.QueryCourseDto]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "getCoursesByCategory", null);
__decorate([
    (0, common_1.Get)(':id/syllabus'),
    (0, swagger_1.ApiOperation)({ summary: 'Get course syllabus by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Course ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Course syllabus details' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "getCourseSyllabus", null);
__decorate([
    (0, common_1.Get)(':id/projects'),
    (0, swagger_1.ApiOperation)({ summary: 'Get course projects by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Course ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Course projects with statistics' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "getCourseProjects", null);
__decorate([
    (0, common_1.Get)(':id/phases'),
    (0, swagger_1.ApiOperation)({ summary: 'Get course phases by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Course ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Course phases with statistics' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "getCoursePhases", null);
__decorate([
    (0, common_1.Get)(':id/market-insights'),
    (0, swagger_1.ApiOperation)({ summary: 'Get course market insights by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Course ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Course market insights and trends' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "getCourseMarketInsights", null);
__decorate([
    (0, common_1.Get)(':id/full-details'),
    (0, swagger_1.ApiOperation)({ summary: 'Get complete course details by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Course ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Complete course details with statistics' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "getCourseFullDetails", null);
__decorate([
    (0, common_1.Get)(':slug'),
    (0, swagger_1.ApiOperation)({ summary: 'Get course by slug' }),
    (0, swagger_1.ApiParam)({ name: 'slug', description: 'Course slug' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Course details' }),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "getCourseBySlug", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new course' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Course created successfully' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_course_dto_1.CreateCourseDto]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "createCourse", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update course' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Course ID' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_course_dto_1.CreateCourseDto]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "updateCourse", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete course' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Course ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "deleteCourse", null);
exports.CourseController = CourseController = __decorate([
    (0, swagger_1.ApiTags)('courses'),
    (0, common_1.Controller)('courses'),
    __metadata("design:paramtypes", [course_service_1.CourseService])
], CourseController);
//# sourceMappingURL=course.controller.js.map