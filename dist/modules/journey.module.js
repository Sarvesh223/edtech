"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JourneyModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const journey_controller_1 = require("../controllers/journey.controller");
const journey_service_1 = require("../services/journey.service");
const journey_schema_1 = require("../schemas/journey.schema");
let JourneyModule = class JourneyModule {
};
exports.JourneyModule = JourneyModule;
exports.JourneyModule = JourneyModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: journey_schema_1.Journey.name, schema: journey_schema_1.JourneySchema }]),
        ],
        controllers: [journey_controller_1.JourneyController],
        providers: [journey_service_1.JourneyService],
        exports: [journey_service_1.JourneyService],
    })
], JourneyModule);
//# sourceMappingURL=journey.module.js.map