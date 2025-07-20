"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const course_controller_1 = require("../controllers/course.controller");
const category_controller_1 = require("../controllers/category.controller");
const course_service_1 = require("../services/course.service");
const category_service_1 = require("../services/category.service");
const course_schema_1 = require("../schemas/course.schema");
const category_schema_1 = require("../schemas/category.schema");
let CourseModule = class CourseModule {
};
exports.CourseModule = CourseModule;
exports.CourseModule = CourseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: course_schema_1.Course.name, schema: course_schema_1.CourseSchema },
                { name: category_schema_1.Category.name, schema: category_schema_1.CategorySchema },
            ]),
        ],
        controllers: [course_controller_1.CourseController, category_controller_1.CategoryController],
        providers: [course_service_1.CourseService, category_service_1.CategoryService],
        exports: [course_service_1.CourseService, category_service_1.CategoryService],
    })
], CourseModule);
//# sourceMappingURL=course.module.js.map