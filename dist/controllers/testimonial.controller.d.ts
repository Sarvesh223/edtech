import { TestimonialService } from '../services/testimonial.service';
import { CreateTestimonialDto, UpdateTestimonialDto, TestimonialQueryDto } from '../dto/testimonial.dto';
export declare class TestimonialController {
    private readonly testimonialService;
    constructor(testimonialService: TestimonialService);
    create(createTestimonialDto: CreateTestimonialDto): Promise<import("../schemas/testimonial.schema").Testimonial>;
    findAll(query: TestimonialQueryDto): Promise<{
        testimonials: import("../schemas/testimonial.schema").Testimonial[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    getApproved(): Promise<import("../schemas/testimonial.schema").Testimonial[]>;
    getFeatured(): Promise<import("../schemas/testimonial.schema").Testimonial[]>;
    getStats(): Promise<{
        total: number;
        approved: number;
        pending: number;
        rejected: number;
        featured: number;
        averageRating: number;
    }>;
    getByCourse(course: string): Promise<import("../schemas/testimonial.schema").Testimonial[]>;
    findOne(id: string): Promise<import("../schemas/testimonial.schema").Testimonial>;
    update(id: string, updateTestimonialDto: UpdateTestimonialDto): Promise<import("../schemas/testimonial.schema").Testimonial>;
    approve(id: string, body?: {
        approvedBy?: string;
    }): Promise<import("../schemas/testimonial.schema").Testimonial>;
    reject(id: string): Promise<import("../schemas/testimonial.schema").Testimonial>;
    toggleFeatured(id: string): Promise<import("../schemas/testimonial.schema").Testimonial>;
    remove(id: string): Promise<void>;
}
