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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAboutUsDto = exports.CreateAboutUsDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateAboutUsDto {
    image;
    title;
    description;
    whyChooseUs;
    isActive;
    order;
}
exports.CreateAboutUsDto = CreateAboutUsDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'About us image URL',
        example: 'https://example.com/about-us-image.jpg'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAboutUsDto.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'About us title',
        example: 'Welcome to EduTech - Transforming Learning Experience'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAboutUsDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'About us description',
        example: 'We are dedicated to providing high-quality online education that empowers learners worldwide...'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAboutUsDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Six reasons why users should choose us',
        example: [
            'Expert instructors with industry experience',
            'Comprehensive curriculum designed for real-world applications',
            'Interactive learning environment with hands-on projects',
            '24/7 student support and mentorship',
            'Flexible learning schedules that fit your lifestyle',
            'Industry-recognized certifications upon completion'
        ]
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(6),
    (0, class_validator_1.ArrayMaxSize)(6),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_validator_1.IsNotEmpty)({ each: true }),
    __metadata("design:type", Array)
], CreateAboutUsDto.prototype, "whyChooseUs", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Whether the about us section is active',
        example: true,
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateAboutUsDto.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Display order',
        example: 1,
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateAboutUsDto.prototype, "order", void 0);
class UpdateAboutUsDto {
    image;
    title;
    description;
    whyChooseUs;
    isActive;
    order;
}
exports.UpdateAboutUsDto = UpdateAboutUsDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'About us image URL',
        example: 'https://example.com/about-us-image.jpg',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateAboutUsDto.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'About us title',
        example: 'Welcome to EduTech - Transforming Learning Experience',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateAboutUsDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'About us description',
        example: 'We are dedicated to providing high-quality online education...',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateAboutUsDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Six reasons why users should choose us',
        example: [
            'Expert instructors with industry experience',
            'Comprehensive curriculum designed for real-world applications',
            'Interactive learning environment with hands-on projects',
            '24/7 student support and mentorship',
            'Flexible learning schedules that fit your lifestyle',
            'Industry-recognized certifications upon completion'
        ],
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(6),
    (0, class_validator_1.ArrayMaxSize)(6),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_validator_1.IsNotEmpty)({ each: true }),
    __metadata("design:type", Array)
], UpdateAboutUsDto.prototype, "whyChooseUs", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Whether the about us section is active',
        example: true,
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateAboutUsDto.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Display order',
        example: 1,
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateAboutUsDto.prototype, "order", void 0);
//# sourceMappingURL=about-us.dto.js.map