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
exports.UpdateJourneyDto = exports.CreateJourneyDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateJourneyDto {
    year;
    title;
    description;
}
exports.CreateJourneyDto = CreateJourneyDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Year of the journey milestone',
        example: 2023,
        minimum: 2020,
        maximum: 2030
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(2020),
    (0, class_validator_1.Max)(2030),
    __metadata("design:type", Number)
], CreateJourneyDto.prototype, "year", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Title of the journey milestone',
        example: 'Platform Launch'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateJourneyDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Detailed description of the milestone',
        example: 'Successfully launched our EdTech platform with 100+ courses'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateJourneyDto.prototype, "description", void 0);
class UpdateJourneyDto {
    year;
    title;
    description;
}
exports.UpdateJourneyDto = UpdateJourneyDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Year of the journey milestone',
        example: 2023,
        minimum: 2020,
        maximum: 2030,
        required: false
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(2020),
    (0, class_validator_1.Max)(2030),
    __metadata("design:type", Number)
], UpdateJourneyDto.prototype, "year", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Title of the journey milestone',
        example: 'Platform Launch',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateJourneyDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Detailed description of the milestone',
        example: 'Successfully launched our EdTech platform with 100+ courses',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateJourneyDto.prototype, "description", void 0);
//# sourceMappingURL=journey.dto.js.map