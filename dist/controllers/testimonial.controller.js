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
exports.TestimonialController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const testimonial_service_1 = require("../services/testimonial.service");
const testimonial_dto_1 = require("../dto/testimonial.dto");
let TestimonialController = class TestimonialController {
    testimonialService;
    constructor(testimonialService) {
        this.testimonialService = testimonialService;
    }
    create(createTestimonialDto) {
        return this.testimonialService.create(createTestimonialDto);
    }
    findAll(query) {
        return this.testimonialService.findAll(query);
    }
    getApproved() {
        return this.testimonialService.getApprovedTestimonials();
    }
    getFeatured() {
        return this.testimonialService.getFeaturedTestimonials();
    }
    getStats() {
        return this.testimonialService.getStats();
    }
    getByCourse(course) {
        return this.testimonialService.getTestimonialsByCourse(course);
    }
    findOne(id) {
        return this.testimonialService.findOne(id);
    }
    update(id, updateTestimonialDto) {
        return this.testimonialService.update(id, updateTestimonialDto);
    }
    approve(id, body) {
        return this.testimonialService.approveTestimonial(id, body?.approvedBy);
    }
    reject(id) {
        return this.testimonialService.rejectTestimonial(id);
    }
    toggleFeatured(id) {
        return this.testimonialService.toggleFeatured(id);
    }
    remove(id) {
        return this.testimonialService.remove(id);
    }
};
exports.TestimonialController = TestimonialController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new testimonial' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Testimonial created successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [testimonial_dto_1.CreateTestimonialDto]),
    __metadata("design:returntype", void 0)
], TestimonialController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all testimonials with filters and pagination' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Testimonials retrieved successfully',
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [testimonial_dto_1.TestimonialQueryDto]),
    __metadata("design:returntype", void 0)
], TestimonialController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('approved'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all approved testimonials' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Approved testimonials retrieved successfully',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TestimonialController.prototype, "getApproved", null);
__decorate([
    (0, common_1.Get)('featured'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all featured testimonials' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Featured testimonials retrieved successfully',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TestimonialController.prototype, "getFeatured", null);
__decorate([
    (0, common_1.Get)('stats'),
    (0, swagger_1.ApiOperation)({ summary: 'Get testimonials statistics' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Statistics retrieved successfully',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TestimonialController.prototype, "getStats", null);
__decorate([
    (0, common_1.Get)('course/:course'),
    (0, swagger_1.ApiOperation)({ summary: 'Get testimonials by course' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Course testimonials retrieved successfully',
    }),
    __param(0, (0, common_1.Param)('course')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TestimonialController.prototype, "getByCourse", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get testimonial by ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Testimonial retrieved successfully',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Testimonial not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TestimonialController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update testimonial' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Testimonial updated successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Testimonial not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, testimonial_dto_1.UpdateTestimonialDto]),
    __metadata("design:returntype", void 0)
], TestimonialController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)(':id/approve'),
    (0, swagger_1.ApiOperation)({ summary: 'Approve testimonial' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Testimonial approved successfully',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Testimonial not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], TestimonialController.prototype, "approve", null);
__decorate([
    (0, common_1.Patch)(':id/reject'),
    (0, swagger_1.ApiOperation)({ summary: 'Reject testimonial' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Testimonial rejected successfully',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Testimonial not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TestimonialController.prototype, "reject", null);
__decorate([
    (0, common_1.Patch)(':id/toggle-featured'),
    (0, swagger_1.ApiOperation)({ summary: 'Toggle testimonial featured status' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Featured status toggled successfully',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Testimonial not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TestimonialController.prototype, "toggleFeatured", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({ summary: 'Delete testimonial' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Testimonial deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Testimonial not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TestimonialController.prototype, "remove", null);
exports.TestimonialController = TestimonialController = __decorate([
    (0, swagger_1.ApiTags)('testimonials'),
    (0, common_1.Controller)('testimonials'),
    __metadata("design:paramtypes", [testimonial_service_1.TestimonialService])
], TestimonialController);
//# sourceMappingURL=testimonial.controller.js.map