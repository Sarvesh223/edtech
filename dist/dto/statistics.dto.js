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
exports.UpdateStatisticsDto = exports.CreateStatisticsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateStatisticsDto {
    totalUsers;
    totalInstructors;
    countryReached = 'India';
    courseCompletionRate = 98;
}
exports.CreateStatisticsDto = CreateStatisticsDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Total number of users on the platform',
        example: 10000,
        minimum: 0,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateStatisticsDto.prototype, "totalUsers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Total number of instructors on the platform',
        example: 250,
        minimum: 0,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateStatisticsDto.prototype, "totalInstructors", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Country reached by the platform',
        example: 'India',
        required: false,
        default: 'India',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateStatisticsDto.prototype, "countryReached", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Course completion rate percentage',
        example: 98,
        minimum: 0,
        maximum: 100,
        required: false,
        default: 98,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(100),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateStatisticsDto.prototype, "courseCompletionRate", void 0);
class UpdateStatisticsDto {
    totalUsers;
    totalInstructors;
    countryReached;
    courseCompletionRate;
}
exports.UpdateStatisticsDto = UpdateStatisticsDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Total number of users on the platform',
        example: 10000,
        minimum: 0,
        required: false,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateStatisticsDto.prototype, "totalUsers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Total number of instructors on the platform',
        example: 250,
        minimum: 0,
        required: false,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateStatisticsDto.prototype, "totalInstructors", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Country reached by the platform',
        example: 'India',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateStatisticsDto.prototype, "countryReached", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Course completion rate percentage',
        example: 98,
        minimum: 0,
        maximum: 100,
        required: false,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(100),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateStatisticsDto.prototype, "courseCompletionRate", void 0);
//# sourceMappingURL=statistics.dto.js.map