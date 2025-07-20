import { Model } from 'mongoose';
import { Testimonial, TestimonialDocument } from '../schemas/testimonial.schema';
import { CreateTestimonialDto, UpdateTestimonialDto, TestimonialQueryDto } from '../dto/testimonial.dto';
export declare class TestimonialService {
    private testimonialModel;
    constructor(testimonialModel: Model<TestimonialDocument>);
    create(createTestimonialDto: CreateTestimonialDto): Promise<Testimonial>;
    findAll(query: TestimonialQueryDto): Promise<{
        testimonials: Testimonial[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    findOne(id: string): Promise<Testimonial>;
    update(id: string, updateTestimonialDto: UpdateTestimonialDto): Promise<Testimonial>;
    remove(id: string): Promise<void>;
    getApprovedTestimonials(): Promise<Testimonial[]>;
    getFeaturedTestimonials(): Promise<Testimonial[]>;
    getTestimonialsByCourse(course: string): Promise<Testimonial[]>;
    approveTestimonial(id: string, approvedBy?: string): Promise<Testimonial>;
    rejectTestimonial(id: string): Promise<Testimonial>;
    toggleFeatured(id: string): Promise<Testimonial>;
    getStats(): Promise<{
        total: number;
        approved: number;
        pending: number;
        rejected: number;
        featured: number;
        averageRating: number;
    }>;
}
