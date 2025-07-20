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
exports.TestimonialService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const testimonial_schema_1 = require("../schemas/testimonial.schema");
let TestimonialService = class TestimonialService {
    testimonialModel;
    constructor(testimonialModel) {
        this.testimonialModel = testimonialModel;
    }
    async create(createTestimonialDto) {
        try {
            const testimonial = new this.testimonialModel(createTestimonialDto);
            return await testimonial.save();
        }
        catch (error) {
            throw new common_1.BadRequestException('Failed to create testimonial');
        }
    }
    async findAll(query) {
        const { page = 1, limit = 10, status, course, rating, featured, sortBy = 'createdAt', sortOrder = 'desc' } = query;
        const filter = { isActive: true };
        if (status)
            filter.status = status;
        if (course)
            filter.course = { $regex: course, $options: 'i' };
        if (rating)
            filter.rating = rating;
        if (featured !== undefined)
            filter.featured = featured;
        const skip = (page - 1) * limit;
        const sortOptions = {};
        sortOptions[sortBy] = sortOrder === 'asc' ? 1 : -1;
        const [testimonials, total] = await Promise.all([
            this.testimonialModel
                .find(filter)
                .sort(sortOptions)
                .skip(skip)
                .limit(limit)
                .exec(),
            this.testimonialModel.countDocuments(filter).exec(),
        ]);
        return {
            testimonials,
            total,
            page: Number(page),
            limit: Number(limit),
            totalPages: Math.ceil(total / limit),
        };
    }
    async findOne(id) {
        const testimonial = await this.testimonialModel.findById(id).exec();
        if (!testimonial) {
            throw new common_1.NotFoundException(`Testimonial with ID ${id} not found`);
        }
        return testimonial;
    }
    async update(id, updateTestimonialDto) {
        const testimonial = await this.testimonialModel
            .findByIdAndUpdate(id, updateTestimonialDto, { new: true })
            .exec();
        if (!testimonial) {
            throw new common_1.NotFoundException(`Testimonial with ID ${id} not found`);
        }
        return testimonial;
    }
    async remove(id) {
        const result = await this.testimonialModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new common_1.NotFoundException(`Testimonial with ID ${id} not found`);
        }
    }
    async getApprovedTestimonials() {
        return await this.testimonialModel
            .find({ status: 'approved', isActive: true })
            .sort({ createdAt: -1 })
            .exec();
    }
    async getFeaturedTestimonials() {
        return await this.testimonialModel
            .find({ status: 'approved', featured: true, isActive: true })
            .sort({ createdAt: -1 })
            .exec();
    }
    async getTestimonialsByCourse(course) {
        return await this.testimonialModel
            .find({
            course: { $regex: course, $options: 'i' },
            status: 'approved',
            isActive: true
        })
            .sort({ createdAt: -1 })
            .exec();
    }
    async approveTestimonial(id, approvedBy) {
        const updateData = {
            status: 'approved',
            approvedAt: new Date(),
        };
        if (approvedBy) {
            updateData.approvedBy = approvedBy;
        }
        const testimonial = await this.testimonialModel
            .findByIdAndUpdate(id, updateData, { new: true })
            .exec();
        if (!testimonial) {
            throw new common_1.NotFoundException(`Testimonial with ID ${id} not found`);
        }
        return testimonial;
    }
    async rejectTestimonial(id) {
        const testimonial = await this.testimonialModel
            .findByIdAndUpdate(id, { status: 'rejected' }, { new: true })
            .exec();
        if (!testimonial) {
            throw new common_1.NotFoundException(`Testimonial with ID ${id} not found`);
        }
        return testimonial;
    }
    async toggleFeatured(id) {
        const testimonial = await this.testimonialModel.findById(id).exec();
        if (!testimonial) {
            throw new common_1.NotFoundException(`Testimonial with ID ${id} not found`);
        }
        testimonial.featured = !testimonial.featured;
        return await testimonial.save();
    }
    async getStats() {
        const [total, approved, pending, rejected, featured, avgRating] = await Promise.all([
            this.testimonialModel.countDocuments({ isActive: true }),
            this.testimonialModel.countDocuments({ status: 'approved', isActive: true }),
            this.testimonialModel.countDocuments({ status: 'pending', isActive: true }),
            this.testimonialModel.countDocuments({ status: 'rejected', isActive: true }),
            this.testimonialModel.countDocuments({ featured: true, isActive: true }),
            this.testimonialModel.aggregate([
                { $match: { status: 'approved', isActive: true } },
                { $group: { _id: null, avgRating: { $avg: '$rating' } } }
            ])
        ]);
        return {
            total,
            approved,
            pending,
            rejected,
            featured,
            averageRating: avgRating[0]?.avgRating || 0,
        };
    }
};
exports.TestimonialService = TestimonialService;
exports.TestimonialService = TestimonialService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(testimonial_schema_1.Testimonial.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TestimonialService);
//# sourceMappingURL=testimonial.service.js.map