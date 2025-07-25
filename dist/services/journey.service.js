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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JourneyService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const journey_schema_1 = require("../schemas/journey.schema");
let JourneyService = class JourneyService {
    journeyModel;
    constructor(journeyModel) {
        this.journeyModel = journeyModel;
    }
    async create(createJourneyDto) {
        const createdJourney = new this.journeyModel(createJourneyDto);
        return createdJourney.save();
    }
    async findAll() {
        return this.journeyModel.find().sort({ year: 1 }).exec();
    }
    async findByYear(year) {
        return this.journeyModel.find({ year }).exec();
    }
    async findOne(id) {
        const journey = await this.journeyModel.findById(id).exec();
        if (!journey) {
            throw new common_1.NotFoundException(`Journey with ID ${id} not found`);
        }
        return journey;
    }
    async update(id, updateJourneyDto) {
        const updatedJourney = await this.journeyModel
            .findByIdAndUpdate(id, updateJourneyDto, { new: true })
            .exec();
        if (!updatedJourney) {
            throw new common_1.NotFoundException(`Journey with ID ${id} not found`);
        }
        return updatedJourney;
    }
    async remove(id) {
        const result = await this.journeyModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new common_1.NotFoundException(`Journey with ID ${id} not found`);
        }
    }
    async getJourneyTimeline() {
        return this.journeyModel.find().sort({ year: 1, createdAt: 1 }).exec();
    }
};
exports.JourneyService = JourneyService;
exports.JourneyService = JourneyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(journey_schema_1.Journey.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], JourneyService);
//# sourceMappingURL=journey.service.js.map