declare class InstructorDto {
    name: string;
    image: string;
    bio: string;
}
declare class CurriculumDto {
    title: string;
    duration: string;
    lessons: number;
}
declare class SyllabusTopicDto {
    title: string;
    description: string;
    subtopics?: string[];
    duration: string;
}
declare class PhaseDto {
    phaseNumber: number;
    title: string;
    duration: string;
    focusAreas: string[];
    skills?: string[];
    tools?: string[];
}
declare class ProjectDto {
    title: string;
    description: string;
    difficulty: string;
    techStack: string[];
    estimatedDuration: string;
    skillsDemonstrated: string[];
    deliverables?: string[];
    isBonus?: boolean;
    inspiredBy?: string;
}
declare class MarketTrendDto {
    title: string;
    description: string;
    impact: string;
    relatedTools?: string[];
}
declare class SalaryInfoDto {
    region: string;
    minSalary: number;
    maxSalary: number;
    currency: string;
    baseCurrency?: string;
}
export declare class CreateCourseDto {
    title: string;
    description: string;
    image: string;
    brochure: string;
    price: number;
    discountPrice?: number;
    rating?: number;
    totalRatings?: number;
    duration: string;
    instructor: InstructorDto;
    categoryId: string;
    level: string;
    enrolledStudents?: number;
    tags?: string[];
    slug: string;
    curriculum?: CurriculumDto[];
    requirements?: string[];
    learningOutcomes?: string[];
    syllabus?: SyllabusTopicDto[];
    phases?: PhaseDto[];
    projects?: ProjectDto[];
    marketTrends?: MarketTrendDto[];
    salaryInfo?: SalaryInfoDto[];
    totalPhases?: number;
    totalProjects?: number;
    targetCompanies?: string[];
    marketOverview?: string;
    careerOutlook?: string;
}
export {};
