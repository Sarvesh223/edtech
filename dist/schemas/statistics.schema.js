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
exports.StatisticsSchema = exports.Statistics = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Statistics = class Statistics {
    totalUsers;
    totalInstructors;
    countryReached;
    courseCompletionRate;
    isActive;
};
exports.Statistics = Statistics;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Statistics.prototype, "totalUsers", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Statistics.prototype, "totalInstructors", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: 'India' }),
    __metadata("design:type", String)
], Statistics.prototype, "countryReached", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: 98 }),
    __metadata("design:type", Number)
], Statistics.prototype, "courseCompletionRate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], Statistics.prototype, "isActive", void 0);
exports.Statistics = Statistics = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Statistics);
exports.StatisticsSchema = mongoose_1.SchemaFactory.createForClass(Statistics);
//# sourceMappingURL=statistics.schema.js.map