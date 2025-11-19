export declare class CreateTestimonialDto {
    studentName: string;
    studentEmail: string;
    course: string;
    message: string;
    rating: number;
    studentImage?: string;
    studentRole?: string;
    toCompanyName?: string;
    fromCompanyName?: string;
    linkedinUrl?: string;
    batchYear?: string;
}
export declare class UpdateTestimonialDto {
    studentName?: string;
    studentEmail?: string;
    course?: string;
    message?: string;
    rating?: number;
    studentImage?: string;
    studentRole?: string;
    batchYear?: string;
    status?: string;
    featured?: boolean;
    isActive?: boolean;
}
export declare class TestimonialQueryDto {
    page?: number;
    limit?: number;
    status?: string;
    course?: string;
    rating?: number;
    featured?: boolean;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
}
