import { CourseService } from '../services/course.service';
import { CreateCourseDto } from '../dto/create-course.dto';
import { QueryCourseDto } from '../dto/query-course.dto';
export declare class CourseController {
    private readonly courseService;
    constructor(courseService: CourseService);
    getAllCourses(queryDto: QueryCourseDto): Promise<{
        success: boolean;
        data: (import("mongoose").Document<unknown, {}, import("../schemas/course.schema").Course, {}> & import("../schemas/course.schema").Course & Required<{
            _id: unknown;
        }> & {
            __v: number;
        })[];
        pagination: {
            currentPage: number;
            totalPages: number;
            totalItems: number;
            itemsPerPage: number;
            hasNext: boolean;
            hasPrev: boolean;
        };
    }>;
    getCoursesByCategory(categorySlug: string, queryDto: QueryCourseDto): Promise<{
        success: boolean;
        data: (import("mongoose").Document<unknown, {}, import("../schemas/course.schema").Course, {}> & import("../schemas/course.schema").Course & Required<{
            _id: unknown;
        }> & {
            __v: number;
        })[];
        category: {
            name: string;
            description: string;
            slug: string;
        };
        pagination: {
            currentPage: number;
            totalPages: number;
            totalItems: number;
            itemsPerPage: number;
            hasNext: boolean;
            hasPrev: boolean;
        };
    }>;
    getCourseSyllabus(id: string): Promise<{
        success: boolean;
        data: {
            courseId: unknown;
            title: string;
            description: string;
            category: import("mongoose").Types.ObjectId;
            syllabus: import("../schemas/course.schema").SyllabusTopic[];
            totalPhases: number | undefined;
            marketTrends: import("../schemas/course.schema").MarketTrend[];
            targetCompanies: string[];
            marketOverview: string | undefined;
        };
    }>;
    getCourseProjects(id: string): Promise<{
        success: boolean;
        data: {
            courseId: unknown;
            title: string;
            description: string;
            category: import("mongoose").Types.ObjectId;
            totalProjects: number | undefined;
            targetCompanies: string[];
            mainProjects: import("../schemas/course.schema").Project[];
            bonusProjects: import("../schemas/course.schema").Project[];
            projectStats: {
                totalProjects: number;
                mainProjects: number;
                bonusProjects: number;
                difficultyBreakdown: {
                    beginner: number;
                    intermediate: number;
                    advanced: number;
                };
            };
        };
    }>;
    getCoursePhases(id: string): Promise<{
        success: boolean;
        data: {
            courseId: unknown;
            title: string;
            description: string;
            category: import("mongoose").Types.ObjectId;
            totalDuration: string;
            level: string;
            totalPhases: number | undefined;
            phases: import("../schemas/course.schema").Phase[];
            phaseStats: {
                totalPhases: number;
                estimatedDuration: number;
                totalFocusAreas: number;
            };
        };
    }>;
    getCourseMarketInsights(id: string): Promise<{
        success: boolean;
        data: {
            courseId: unknown;
            title: string;
            description: string;
            category: import("mongoose").Types.ObjectId;
            marketOverview: string | undefined;
            careerOutlook: string | undefined;
            targetCompanies: string[];
            marketTrends: import("../schemas/course.schema").MarketTrend[];
            salaryInfo: import("../schemas/course.schema").SalaryInfo[];
            insights: {
                totalTrends: number;
                highImpactTrends: number;
                avgSalaryRange: {
                    min: number;
                    max: number;
                    regions: string[];
                } | null;
            };
        };
    }>;
    getCourseFullDetails(id: string): Promise<{
        success: boolean;
        data: {
            stats: {
                totalPhases: number;
                totalProjects: number;
                totalMarketTrends: number;
                totalSyllabus: number;
                projectsByDifficulty: {
                    beginner: number;
                    intermediate: number;
                    advanced: number;
                };
            };
            title: string;
            description: string;
            image: string;
            video?: string;
            brochure?: string;
            price: number;
            discountPrice: number;
            rating: number;
            totalRatings: number;
            duration: string;
            instructor: import("../schemas/course.schema").Instructor;
            categoryId: import("mongoose").Types.ObjectId;
            level: string;
            enrolledStudents: number;
            tags: string[];
            isActive: boolean;
            slug: string;
            curriculum: import("../schemas/course.schema").Curriculum[];
            requirements: string[];
            learningOutcomes: string[];
            syllabus: import("../schemas/course.schema").SyllabusTopic[];
            phases: import("../schemas/course.schema").Phase[];
            projects: import("../schemas/course.schema").Project[];
            marketTrends: import("../schemas/course.schema").MarketTrend[];
            salaryInfo: import("../schemas/course.schema").SalaryInfo[];
            totalPhases?: number;
            totalProjects?: number;
            targetCompanies: string[];
            marketOverview?: string;
            careerOutlook?: string;
            _id: unknown;
            $locals: Record<string, unknown>;
            $op: "save" | "validate" | "remove" | null;
            $where: Record<string, unknown>;
            baseModelName?: string;
            collection: import("mongoose").Collection;
            db: import("mongoose").Connection;
            errors?: import("mongoose").Error.ValidationError;
            id?: any;
            isNew: boolean;
            schema: import("mongoose").Schema;
            __v: number;
        };
    }>;
    getCourseBySlug(slug: string): Promise<{
        success: boolean;
        data: import("mongoose").Document<unknown, {}, import("../schemas/course.schema").Course, {}> & import("../schemas/course.schema").Course & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
    }>;
    createCourse(createCourseDto: CreateCourseDto): Promise<{
        success: boolean;
        message: string;
        data: import("mongoose").Document<unknown, {}, import("../schemas/course.schema").Course, {}> & import("../schemas/course.schema").Course & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
    }>;
    updateCourse(id: string, updateCourseDto: CreateCourseDto): Promise<{
        success: boolean;
        message: string;
        data: import("mongoose").Document<unknown, {}, import("../schemas/course.schema").Course, {}> & import("../schemas/course.schema").Course & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
    }>;
    deleteCourse(id: string): Promise<{
        success: boolean;
        message: string;
    }>;
}
