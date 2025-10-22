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
exports.CourseSchema = exports.Course = exports.SalaryInfo = exports.MarketTrend = exports.Project = exports.Phase = exports.SyllabusTopic = exports.Curriculum = exports.Instructor = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Instructor = class Instructor {
    name;
    image;
    bio;
};
exports.Instructor = Instructor;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Instructor.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Instructor.prototype, "image", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Instructor.prototype, "bio", void 0);
exports.Instructor = Instructor = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], Instructor);
let Curriculum = class Curriculum {
    title;
    duration;
    lessons;
};
exports.Curriculum = Curriculum;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Curriculum.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Curriculum.prototype, "duration", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Curriculum.prototype, "lessons", void 0);
exports.Curriculum = Curriculum = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], Curriculum);
let SyllabusTopic = class SyllabusTopic {
    title;
    description;
    subtopics;
    duration;
};
exports.SyllabusTopic = SyllabusTopic;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], SyllabusTopic.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], SyllabusTopic.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], SyllabusTopic.prototype, "subtopics", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], SyllabusTopic.prototype, "duration", void 0);
exports.SyllabusTopic = SyllabusTopic = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], SyllabusTopic);
let Phase = class Phase {
    phaseNumber;
    title;
    duration;
    focusAreas;
    skills;
    tools;
};
exports.Phase = Phase;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Phase.prototype, "phaseNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Phase.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Phase.prototype, "duration", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], Phase.prototype, "focusAreas", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], Phase.prototype, "skills", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], Phase.prototype, "tools", void 0);
exports.Phase = Phase = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], Phase);
let Project = class Project {
    title;
    description;
    difficulty;
    techStack;
    estimatedDuration;
    skillsDemonstrated;
    deliverables;
    isBonus;
    inspiredBy;
};
exports.Project = Project;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Project.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Project.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Project.prototype, "difficulty", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], Project.prototype, "techStack", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Project.prototype, "estimatedDuration", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Array)
], Project.prototype, "skillsDemonstrated", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], Project.prototype, "deliverables", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], Project.prototype, "isBonus", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Project.prototype, "inspiredBy", void 0);
exports.Project = Project = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], Project);
let MarketTrend = class MarketTrend {
    title;
    description;
    impact;
    relatedTools;
};
exports.MarketTrend = MarketTrend;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], MarketTrend.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], MarketTrend.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], MarketTrend.prototype, "impact", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], MarketTrend.prototype, "relatedTools", void 0);
exports.MarketTrend = MarketTrend = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], MarketTrend);
let SalaryInfo = class SalaryInfo {
    region;
    minSalary;
    maxSalary;
    currency;
    baseCurrency;
};
exports.SalaryInfo = SalaryInfo;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], SalaryInfo.prototype, "region", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], SalaryInfo.prototype, "minSalary", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], SalaryInfo.prototype, "maxSalary", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], SalaryInfo.prototype, "currency", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 'USD' }),
    __metadata("design:type", String)
], SalaryInfo.prototype, "baseCurrency", void 0);
exports.SalaryInfo = SalaryInfo = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], SalaryInfo);
let Course = class Course extends mongoose_2.Document {
    title;
    description;
    image;
    brochure;
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
    isActive;
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
};
exports.Course = Course;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Course.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Course.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Course.prototype, "image", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '' }),
    __metadata("design:type", String)
], Course.prototype, "brochure", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Course.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], Course.prototype, "discountPrice", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0, min: 0, max: 5 }),
    __metadata("design:type", Number)
], Course.prototype, "rating", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], Course.prototype, "totalRatings", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Course.prototype, "duration", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Instructor, required: true }),
    __metadata("design:type", Instructor)
], Course.prototype, "instructor", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Category', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Course.prototype, "categoryId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Course.prototype, "level", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], Course.prototype, "enrolledStudents", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], Course.prototype, "tags", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], Course.prototype, "isActive", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], Course.prototype, "slug", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [Curriculum], default: [] }),
    __metadata("design:type", Array)
], Course.prototype, "curriculum", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], Course.prototype, "requirements", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], Course.prototype, "learningOutcomes", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [SyllabusTopic], default: [] }),
    __metadata("design:type", Array)
], Course.prototype, "syllabus", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [Phase], default: [] }),
    __metadata("design:type", Array)
], Course.prototype, "phases", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [Project], default: [] }),
    __metadata("design:type", Array)
], Course.prototype, "projects", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [MarketTrend], default: [] }),
    __metadata("design:type", Array)
], Course.prototype, "marketTrends", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [SalaryInfo], default: [] }),
    __metadata("design:type", Array)
], Course.prototype, "salaryInfo", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Course.prototype, "totalPhases", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Course.prototype, "totalProjects", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], Course.prototype, "targetCompanies", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Course.prototype, "marketOverview", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Course.prototype, "careerOutlook", void 0);
exports.Course = Course = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Course);
exports.CourseSchema = mongoose_1.SchemaFactory.createForClass(Course);
//# sourceMappingURL=course.schema.js.map