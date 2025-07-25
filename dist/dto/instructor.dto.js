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
exports.InstructorResponseDto = exports.UpdateInstructorDto = exports.CreateInstructorDto = exports.SocialHandlesDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
class SocialHandlesDto {
    twitter;
    facebook;
    instagram;
}
exports.SocialHandlesDto = SocialHandlesDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Twitter handle (without @)',
        example: 'johndoe',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SocialHandlesDto.prototype, "twitter", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Facebook username or page name',
        example: 'johndoe.dev',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SocialHandlesDto.prototype, "facebook", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Instagram handle (without @)',
        example: 'johndoe_codes',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SocialHandlesDto.prototype, "instagram", void 0);
class CreateInstructorDto {
    name;
    designation;
    image;
    socialHandles;
}
exports.CreateInstructorDto = CreateInstructorDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Full name of the instructor',
        example: 'John Doe',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateInstructorDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Designation or title of the instructor',
        example: 'Senior Software Engineer & Tech Lead',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateInstructorDto.prototype, "designation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Profile image URL of the instructor',
        example: 'https://example.com/images/john-doe.jpg',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], CreateInstructorDto.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Social media handles',
        type: SocialHandlesDto,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => SocialHandlesDto),
    __metadata("design:type", SocialHandlesDto)
], CreateInstructorDto.prototype, "socialHandles", void 0);
class UpdateInstructorDto extends (0, swagger_1.PartialType)(CreateInstructorDto) {
}
exports.UpdateInstructorDto = UpdateInstructorDto;
class InstructorResponseDto {
    id;
    name;
    designation;
    image;
    socialHandles;
    createdAt;
    updatedAt;
}
exports.InstructorResponseDto = InstructorResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Instructor ID',
        example: '507f1f77bcf86cd799439011',
    }),
    __metadata("design:type", String)
], InstructorResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Full name of the instructor',
        example: 'John Doe',
    }),
    __metadata("design:type", String)
], InstructorResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Designation or title of the instructor',
        example: 'Senior Software Engineer & Tech Lead',
    }),
    __metadata("design:type", String)
], InstructorResponseDto.prototype, "designation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Profile image URL of the instructor',
        example: 'https://example.com/images/john-doe.jpg',
    }),
    __metadata("design:type", String)
], InstructorResponseDto.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Social media handles',
        type: SocialHandlesDto,
    }),
    __metadata("design:type", SocialHandlesDto)
], InstructorResponseDto.prototype, "socialHandles", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Creation timestamp',
        example: '2024-01-15T10:30:00.000Z',
    }),
    __metadata("design:type", Date)
], InstructorResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Last update timestamp',
        example: '2024-01-15T10:30:00.000Z',
    }),
    __metadata("design:type", Date)
], InstructorResponseDto.prototype, "updatedAt", void 0);
//# sourceMappingURL=instructor.dto.js.map