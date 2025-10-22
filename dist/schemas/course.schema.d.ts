import { Document, Types } from 'mongoose';
export declare class Instructor {
    name: string;
    image: string;
    bio: string;
}
export declare class Curriculum {
    title: string;
    duration: string;
    lessons: number;
}
export declare class SyllabusTopic {
    title: string;
    description: string;
    subtopics: string[];
    duration: string;
}
export declare class Phase {
    phaseNumber: number;
    title: string;
    duration: string;
    focusAreas: string[];
    skills: string[];
    tools: string[];
}
export declare class Project {
    title: string;
    description: string;
    difficulty: string;
    techStack: string[];
    estimatedDuration: string;
    skillsDemonstrated: string[];
    deliverables: string[];
    isBonus: boolean;
    inspiredBy?: string;
}
export declare class MarketTrend {
    title: string;
    description: string;
    impact: string;
    relatedTools: string[];
}
export declare class SalaryInfo {
    region: string;
    minSalary: number;
    maxSalary: number;
    currency: string;
    baseCurrency: string;
}
export declare class Course extends Document {
    title: string;
    description: string;
    image: string;
    brochure: string;
    price: number;
    discountPrice: number;
    rating: number;
    totalRatings: number;
    duration: string;
    instructor: Instructor;
    categoryId: Types.ObjectId;
    level: string;
    enrolledStudents: number;
    tags: string[];
    isActive: boolean;
    slug: string;
    curriculum: Curriculum[];
    requirements: string[];
    learningOutcomes: string[];
    syllabus: SyllabusTopic[];
    phases: Phase[];
    projects: Project[];
    marketTrends: MarketTrend[];
    salaryInfo: SalaryInfo[];
    totalPhases?: number;
    totalProjects?: number;
    targetCompanies: string[];
    marketOverview?: string;
    careerOutlook?: string;
}
export declare const CourseSchema: import("mongoose").Schema<Course, import("mongoose").Model<Course, any, any, any, Document<unknown, any, Course, any> & Course & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Course, Document<unknown, {}, import("mongoose").FlatRecord<Course>, {}> & import("mongoose").FlatRecord<Course> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
