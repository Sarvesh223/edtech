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
exports.CreateCourseDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
class InstructorDto {
    name;
    image;
    bio;
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'John Doe' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], InstructorDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'https://example.com/instructor.jpg' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], InstructorDto.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Senior Web Developer with 10+ years experience' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], InstructorDto.prototype, "bio", void 0);
class CurriculumDto {
    title;
    duration;
    lessons;
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'HTML Fundamentals' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CurriculumDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2 hours' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CurriculumDto.prototype, "duration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 5 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CurriculumDto.prototype, "lessons", void 0);
class SyllabusTopicDto {
    title;
    description;
    subtopics;
    duration;
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'SQL Mastery' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SyllabusTopicDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Complex SQL queries, performance tuning, and optimization',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SyllabusTopicDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ['Complex joins', 'Window functions', 'Performance tuning'],
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], SyllabusTopicDto.prototype, "subtopics", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '4-6 weeks' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SyllabusTopicDto.prototype, "duration", void 0);
class PhaseDto {
    phaseNumber;
    title;
    duration;
    focusAreas;
    skills;
    tools;
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], PhaseDto.prototype, "phaseNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Foundation Phase' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], PhaseDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '4-6 weeks' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], PhaseDto.prototype, "duration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['SQL', 'Python/DSA', 'Data Modeling'] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], PhaseDto.prototype, "focusAreas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ['Complex queries', 'Data structures', 'Schema design'],
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], PhaseDto.prototype, "skills", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['MySQL', 'PostgreSQL', 'Python'] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], PhaseDto.prototype, "tools", void 0);
class ProjectDto {
    title;
    description;
    difficulty;
    techStack;
    estimatedDuration;
    skillsDemonstrated;
    deliverables;
    isBonus;
    inspiredBy;
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Real-Time Analytics Pipeline' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ProjectDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Build a pipeline that processes real-time user interaction data',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ProjectDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Intermediate' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ProjectDto.prototype, "difficulty", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['Kafka', 'Spark', 'Cassandra', 'Grafana'] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], ProjectDto.prototype, "techStack", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2-3 weeks' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ProjectDto.prototype, "estimatedDuration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['Streaming', 'Fault tolerance', 'Monitoring'] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], ProjectDto.prototype, "skillsDemonstrated", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ['Working pipeline', 'Architecture diagram', 'Documentation'],
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], ProjectDto.prototype, "deliverables", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], ProjectDto.prototype, "isBonus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Netflix, Meta' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ProjectDto.prototype, "inspiredBy", void 0);
class MarketTrendDto {
    title;
    description;
    impact;
    relatedTools;
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Cloud-Native Data Platforms' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], MarketTrendDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Increasing reliance on AWS, GCP, and Azure-native tools',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], MarketTrendDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'High' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], MarketTrendDto.prototype, "impact", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['AWS Redshift', 'BigQuery', 'Synapse'] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], MarketTrendDto.prototype, "relatedTools", void 0);
class SalaryInfoDto {
    region;
    minSalary;
    maxSalary;
    currency;
    baseCurrency;
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'United States' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SalaryInfoDto.prototype, "region", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 120000 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], SalaryInfoDto.prototype, "minSalary", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 250000 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], SalaryInfoDto.prototype, "maxSalary", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'USD' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SalaryInfoDto.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'USD' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SalaryInfoDto.prototype, "baseCurrency", void 0);
class CreateCourseDto {
    title;
    description;
    image;
    brochure;
    video;
    price;
    discountPrice;
    rating;
    totalRatings;
    duration;
    instructor;
    categoryId;
    level;
    enrolledStudents;
    tags;
    slug;
    curriculum;
    requirements;
    learningOutcomes;
    syllabus;
    phases;
    projects;
    marketTrends;
    salaryInfo;
    totalPhases;
    totalProjects;
    targetCompanies;
    marketOverview;
    careerOutlook;
}
exports.CreateCourseDto = CreateCourseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Complete Web Development Bootcamp' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCourseDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Learn HTML, CSS, JavaScript, React, Node.js and more',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCourseDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'https://example.com/course-image.jpg' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCourseDto.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'https://example.com/course-brochure.pdf' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCourseDto.prototype, "brochure", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'https://example.com/course-image.jpg' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCourseDto.prototype, "video", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 299.99 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateCourseDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 199.99, required: false }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateCourseDto.prototype, "discountPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 4.5, required: false }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(5),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateCourseDto.prototype, "rating", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 120, required: false }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateCourseDto.prototype, "totalRatings", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '40 hours' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCourseDto.prototype, "duration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: InstructorDto }),
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => InstructorDto),
    __metadata("design:type", InstructorDto)
], CreateCourseDto.prototype, "instructor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '507f1f77bcf86cd799439011' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCourseDto.prototype, "categoryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Beginner',
        enum: ['Beginner', 'Intermediate', 'Advanced'],
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCourseDto.prototype, "level", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1250, required: false }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateCourseDto.prototype, "enrolledStudents", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['JavaScript', 'React', 'Node.js'], required: false }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateCourseDto.prototype, "tags", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'complete-web-development-bootcamp' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCourseDto.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [CurriculumDto], required: false }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => CurriculumDto),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateCourseDto.prototype, "curriculum", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ['Basic computer knowledge', 'Internet connection'],
        required: false,
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateCourseDto.prototype, "requirements", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ['Build responsive websites', 'Create web applications'],
        required: false,
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateCourseDto.prototype, "learningOutcomes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [SyllabusTopicDto], required: false }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => SyllabusTopicDto),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateCourseDto.prototype, "syllabus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [PhaseDto], required: false }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => PhaseDto),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateCourseDto.prototype, "phases", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [ProjectDto], required: false }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ProjectDto),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateCourseDto.prototype, "projects", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [MarketTrendDto], required: false }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => MarketTrendDto),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateCourseDto.prototype, "marketTrends", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [SalaryInfoDto], required: false }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => SalaryInfoDto),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateCourseDto.prototype, "salaryInfo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 3, required: false }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateCourseDto.prototype, "totalPhases", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 6, required: false }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateCourseDto.prototype, "totalProjects", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['FAANG', 'MANG', 'Startups'], required: false }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateCourseDto.prototype, "targetCompanies", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Data engineering roles are experiencing exponential demand growth...',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCourseDto.prototype, "marketOverview", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Strong career growth with high compensation packages...',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCourseDto.prototype, "careerOutlook", void 0);
//# sourceMappingURL=create-course.dto.js.map