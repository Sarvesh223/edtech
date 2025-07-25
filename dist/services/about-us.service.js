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
exports.AboutUsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const about_us_schema_1 = require("../schemas/about-us.schema");
let AboutUsService = class AboutUsService {
    aboutUsModel;
    constructor(aboutUsModel) {
        this.aboutUsModel = aboutUsModel;
    }
    async create(createAboutUsDto) {
        try {
            const createdAboutUs = new this.aboutUsModel(createAboutUsDto);
            return await createdAboutUs.save();
        }
        catch (error) {
            if (error.code === 11000) {
                throw new common_1.ConflictException('About Us entry already exists');
            }
            throw error;
        }
    }
    async findAll() {
        return this.aboutUsModel
            .find()
            .sort({ order: 1, createdAt: -1 })
            .exec();
    }
    async findActive() {
        return this.aboutUsModel
            .find({ isActive: true })
            .sort({ order: 1, createdAt: -1 })
            .exec();
    }
    async findOne(id) {
        const aboutUs = await this.aboutUsModel.findById(id).exec();
        if (!aboutUs) {
            throw new common_1.NotFoundException(`About Us with ID ${id} not found`);
        }
        return aboutUs;
    }
    async update(id, updateAboutUsDto) {
        const updatedAboutUs = await this.aboutUsModel
            .findByIdAndUpdate(id, updateAboutUsDto, { new: true })
            .exec();
        if (!updatedAboutUs) {
            throw new common_1.NotFoundException(`About Us with ID ${id} not found`);
        }
        return updatedAboutUs;
    }
    async remove(id) {
        const deletedAboutUs = await this.aboutUsModel
            .findByIdAndDelete(id)
            .exec();
        if (!deletedAboutUs) {
            throw new common_1.NotFoundException(`About Us with ID ${id} not found`);
        }
        return deletedAboutUs;
    }
    async toggleStatus(id) {
        const aboutUs = await this.findOne(id);
        return this.update(id, { isActive: !aboutUs.isActive });
    }
};
exports.AboutUsService = AboutUsService;
exports.AboutUsService = AboutUsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(about_us_schema_1.AboutUs.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AboutUsService);
//# sourceMappingURL=about-us.service.js.map