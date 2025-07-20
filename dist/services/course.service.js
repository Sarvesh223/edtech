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
exports.CourseService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const course_schema_1 = require("../schemas/course.schema");
const category_schema_1 = require("../schemas/category.schema");
let CourseService = class CourseService {
    courseModel;
    categoryModel;
    constructor(courseModel, categoryModel) {
        this.courseModel = courseModel;
        this.categoryModel = categoryModel;
    }
    async getAllCourses(queryDto) {
        const { page = 1, limit = 10, sortBy = 'createdAt', sortOrder = 'desc', search, level, } = queryDto;
        const filter = { isActive: true };
        if (search) {
            filter.$or = [
                { title: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } },
                { tags: { $in: [new RegExp(search, 'i')] } },
            ];
        }
        if (level) {
            filter.level = level;
        }
        const skip = (page - 1) * limit;
        const sortOptions = {};
        sortOptions[sortBy] = sortOrder === 'asc' ? 1 : -1;
        const courses = await this.courseModel
            .find(filter)
            .populate('categoryId', 'name slug')
            .sort(sortOptions)
            .skip(skip)
            .limit(limit);
        const total = await this.courseModel.countDocuments(filter);
        return {
            success: true,
            data: courses,
            pagination: {
                currentPage: page,
                totalPages: Math.ceil(total / limit),
                totalItems: total,
                itemsPerPage: limit,
                hasNext: page < Math.ceil(total / limit),
                hasPrev: page > 1,
            },
        };
    }
    async getCoursesByCategory(categorySlug, queryDto) {
        const category = await this.categoryModel.findOne({
            slug: categorySlug,
            isActive: true,
        });
        if (!category) {
            throw new common_1.NotFoundException('Category not found');
        }
        const { page = 1, limit = 10, sortBy = 'createdAt', sortOrder = 'desc', search, level, } = queryDto;
        const filter = { categoryId: category._id, isActive: true };
        if (search) {
            filter.$or = [
                { title: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } },
                { tags: { $in: [new RegExp(search, 'i')] } },
            ];
        }
        if (level) {
            filter.level = level;
        }
        const skip = (page - 1) * limit;
        const sortOptions = {};
        sortOptions[sortBy] = sortOrder === 'asc' ? 1 : -1;
        const courses = await this.courseModel
            .find(filter)
            .populate('categoryId', 'name slug')
            .sort(sortOptions)
            .skip(skip)
            .limit(limit);
        const total = await this.courseModel.countDocuments(filter);
        return {
            success: true,
            data: courses,
            category: {
                name: category.name,
                description: category.description,
                slug: category.slug,
            },
            pagination: {
                currentPage: page,
                totalPages: Math.ceil(total / limit),
                totalItems: total,
                itemsPerPage: limit,
                hasNext: page < Math.ceil(total / limit),
                hasPrev: page > 1,
            },
        };
    }
    async getCourseBySlug(slug) {
        const course = await this.courseModel
            .findOne({ slug, isActive: true })
            .populate('categoryId', 'name slug');
        if (!course) {
            throw new common_1.NotFoundException('Course not found');
        }
        return {
            success: true,
            data: course,
        };
    }
    async createCourse(createCourseDto) {
        const courseData = {
            ...createCourseDto,
            categoryId: new mongoose_2.Types.ObjectId(createCourseDto.categoryId),
        };
        const course = new this.courseModel(courseData);
        await course.save();
        return {
            success: true,
            message: 'Course created successfully',
            data: course,
        };
    }
    async updateCourse(id, updateCourseDto) {
        const updateData = {
            ...updateCourseDto,
            ...(updateCourseDto.categoryId && {
                categoryId: new mongoose_2.Types.ObjectId(updateCourseDto.categoryId),
            }),
        };
        const course = await this.courseModel.findByIdAndUpdate(id, updateData, {
            new: true,
        });
        if (!course) {
            throw new common_1.NotFoundException('Course not found');
        }
        return {
            success: true,
            message: 'Course updated successfully',
            data: course,
        };
    }
    async deleteCourse(id) {
        const course = await this.courseModel.findByIdAndUpdate(id, { isActive: false }, { new: true });
        if (!course) {
            throw new common_1.NotFoundException('Course not found');
        }
        return {
            success: true,
            message: 'Course deleted successfully',
        };
    }
    async getCourseSyllabus(id) {
        const course = await this.courseModel
            .findOne({ _id: id, isActive: true })
            .select('title description syllabus totalPhases marketTrends targetCompanies marketOverview')
            .populate('categoryId', 'name slug');
        if (!course) {
            throw new common_1.NotFoundException('Course not found');
        }
        return {
            success: true,
            data: {
                courseId: course._id,
                title: course.title,
                description: course.description,
                category: course.categoryId,
                syllabus: course.syllabus,
                totalPhases: course.totalPhases,
                marketTrends: course.marketTrends,
                targetCompanies: course.targetCompanies,
                marketOverview: course.marketOverview,
            },
        };
    }
    async getCourseProjects(id) {
        const course = await this.courseModel
            .findOne({ _id: id, isActive: true })
            .select('title description projects totalProjects targetCompanies')
            .populate('categoryId', 'name slug');
        if (!course) {
            throw new common_1.NotFoundException('Course not found');
        }
        const mainProjects = course.projects.filter(project => !project.isBonus);
        const bonusProjects = course.projects.filter(project => project.isBonus);
        return {
            success: true,
            data: {
                courseId: course._id,
                title: course.title,
                description: course.description,
                category: course.categoryId,
                totalProjects: course.totalProjects,
                targetCompanies: course.targetCompanies,
                mainProjects: mainProjects,
                bonusProjects: bonusProjects,
                projectStats: {
                    totalProjects: course.projects.length,
                    mainProjects: mainProjects.length,
                    bonusProjects: bonusProjects.length,
                    difficultyBreakdown: {
                        beginner: course.projects.filter(p => p.difficulty === 'Beginner').length,
                        intermediate: course.projects.filter(p => p.difficulty === 'Intermediate').length,
                        advanced: course.projects.filter(p => p.difficulty === 'Advanced').length,
                    },
                },
            },
        };
    }
    async getCoursePhases(id) {
        const course = await this.courseModel
            .findOne({ _id: id, isActive: true })
            .select('title description phases totalPhases duration level')
            .populate('categoryId', 'name slug');
        if (!course) {
            throw new common_1.NotFoundException('Course not found');
        }
        return {
            success: true,
            data: {
                courseId: course._id,
                title: course.title,
                description: course.description,
                category: course.categoryId,
                totalDuration: course.duration,
                level: course.level,
                totalPhases: course.totalPhases,
                phases: course.phases,
                phaseStats: {
                    totalPhases: course.phases.length,
                    estimatedDuration: course.phases.reduce((total, phase) => {
                        const durationMatch = phase.duration.match(/(\d+)-?(\d+)?/);
                        if (durationMatch) {
                            const min = parseInt(durationMatch[1]);
                            const max = durationMatch[2] ? parseInt(durationMatch[2]) : min;
                            return total + Math.ceil((min + max) / 2);
                        }
                        return total;
                    }, 0),
                    totalFocusAreas: course.phases.reduce((total, phase) => total + phase.focusAreas.length, 0),
                },
            },
        };
    }
    async getCourseMarketInsights(id) {
        const course = await this.courseModel
            .findOne({ _id: id, isActive: true })
            .select('title description marketTrends salaryInfo targetCompanies marketOverview careerOutlook')
            .populate('categoryId', 'name slug');
        if (!course) {
            throw new common_1.NotFoundException('Course not found');
        }
        return {
            success: true,
            data: {
                courseId: course._id,
                title: course.title,
                description: course.description,
                category: course.categoryId,
                marketOverview: course.marketOverview,
                careerOutlook: course.careerOutlook,
                targetCompanies: course.targetCompanies,
                marketTrends: course.marketTrends,
                salaryInfo: course.salaryInfo,
                insights: {
                    totalTrends: course.marketTrends.length,
                    highImpactTrends: course.marketTrends.filter(trend => trend.impact === 'High').length,
                    avgSalaryRange: course.salaryInfo.length > 0 ? {
                        min: Math.min(...course.salaryInfo.map(s => s.minSalary)),
                        max: Math.max(...course.salaryInfo.map(s => s.maxSalary)),
                        regions: course.salaryInfo.map(s => s.region),
                    } : null,
                },
            },
        };
    }
    async getCourseFullDetails(id) {
        const course = await this.courseModel
            .findOne({ _id: id, isActive: true })
            .populate('categoryId', 'name slug');
        if (!course) {
            throw new common_1.NotFoundException('Course not found');
        }
        return {
            success: true,
            data: {
                ...course.toObject(),
                stats: {
                    totalPhases: course.phases.length,
                    totalProjects: course.projects.length,
                    totalMarketTrends: course.marketTrends.length,
                    totalSyllabus: course.syllabus.length,
                    projectsByDifficulty: {
                        beginner: course.projects.filter(p => p.difficulty === 'Beginner').length,
                        intermediate: course.projects.filter(p => p.difficulty === 'Intermediate').length,
                        advanced: course.projects.filter(p => p.difficulty === 'Advanced').length,
                    },
                },
            },
        };
    }
};
exports.CourseService = CourseService;
exports.CourseService = CourseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(course_schema_1.Course.name)),
    __param(1, (0, mongoose_1.InjectModel)(category_schema_1.Category.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], CourseService);
//# sourceMappingURL=course.service.js.map