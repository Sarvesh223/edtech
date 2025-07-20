"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AboutUsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const about_us_service_1 = require("../services/about-us.service");
const about_us_controller_1 = require("../controllers/about-us.controller");
const about_us_schema_1 = require("../schemas/about-us.schema");
let AboutUsModule = class AboutUsModule {
};
exports.AboutUsModule = AboutUsModule;
exports.AboutUsModule = AboutUsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: about_us_schema_1.AboutUs.name, schema: about_us_schema_1.AboutUsSchema }]),
        ],
        controllers: [about_us_controller_1.AboutUsController],
        providers: [about_us_service_1.AboutUsService],
        exports: [about_us_service_1.AboutUsService],
    })
], AboutUsModule);
//# sourceMappingURL=about-us.module.js.map