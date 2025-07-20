"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionalBannerModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const promotional_banner_service_1 = require("../services/promotional-banner.service");
const promotional_banner_controller_1 = require("../controllers/promotional-banner.controller");
const promotional_banner_schema_1 = require("../schemas/promotional-banner.schema");
let PromotionalBannerModule = class PromotionalBannerModule {
};
exports.PromotionalBannerModule = PromotionalBannerModule;
exports.PromotionalBannerModule = PromotionalBannerModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: promotional_banner_schema_1.PromotionalBanner.name, schema: promotional_banner_schema_1.PromotionalBannerSchema },
            ]),
        ],
        controllers: [promotional_banner_controller_1.PromotionalBannerController],
        providers: [promotional_banner_service_1.PromotionalBannerService],
        exports: [promotional_banner_service_1.PromotionalBannerService],
    })
], PromotionalBannerModule);
//# sourceMappingURL=promotional-banner.module.js.map