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
exports.InstructorSchema = exports.Instructor = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
let Instructor = class Instructor {
    name;
    designation;
    image;
    socialHandles;
    createdAt;
    updatedAt;
};
exports.Instructor = Instructor;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Full name of the instructor',
        example: 'John Doe',
    }),
    (0, mongoose_1.Prop)({ required: true, trim: true }),
    __metadata("design:type", String)
], Instructor.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Designation or title of the instructor',
        example: 'Senior Software Engineer & Tech Lead',
    }),
    (0, mongoose_1.Prop)({ required: true, trim: true }),
    __metadata("design:type", String)
], Instructor.prototype, "designation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Profile image URL of the instructor',
        example: 'https://example.com/images/john-doe.jpg',
    }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Instructor.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Social media handles',
        example: {
            twitter: '@johndoe',
            facebook: 'johndoe.dev',
            instagram: '@johndoe_codes',
        },
    }),
    (0, mongoose_1.Prop)({
        type: {
            twitter: { type: String, default: '' },
            facebook: { type: String, default: '' },
            instagram: { type: String, default: '' },
        },
        default: {},
    }),
    __metadata("design:type", Object)
], Instructor.prototype, "socialHandles", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Creation timestamp',
        example: '2024-01-15T10:30:00.000Z',
    }),
    __metadata("design:type", Date)
], Instructor.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Last update timestamp',
        example: '2024-01-15T10:30:00.000Z',
    }),
    __metadata("design:type", Date)
], Instructor.prototype, "updatedAt", void 0);
exports.Instructor = Instructor = __decorate([
    (0, mongoose_1.Schema)({
        collection: 'instructors',
        timestamps: true,
    })
], Instructor);
exports.InstructorSchema = mongoose_1.SchemaFactory.createForClass(Instructor);
//# sourceMappingURL=instructor.schema.js.map