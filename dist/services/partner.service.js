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
exports.PartnerService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const partner_schema_1 = require("../schemas/partner.schema");
let PartnerService = class PartnerService {
    partnerModel;
    constructor(partnerModel) {
        this.partnerModel = partnerModel;
    }
    async create(createPartnerDto) {
        try {
            const createdPartner = new this.partnerModel(createPartnerDto);
            return await createdPartner.save();
        }
        catch (error) {
            throw new common_1.BadRequestException('Failed to create partner');
        }
    }
    async findAll(includeInactive = false) {
        const filter = includeInactive ? {} : { isActive: true };
        return await this.partnerModel
            .find(filter)
            .sort({ displayOrder: 1, createdAt: -1 })
            .exec();
    }
    async findOne(id) {
        const partner = await this.partnerModel.findById(id).exec();
        if (!partner) {
            throw new common_1.NotFoundException(`Partner with ID ${id} not found`);
        }
        return partner;
    }
    async update(id, updatePartnerDto) {
        const updatedPartner = await this.partnerModel
            .findByIdAndUpdate(id, { ...updatePartnerDto, updatedAt: new Date() }, { new: true, runValidators: true })
            .exec();
        if (!updatedPartner) {
            throw new common_1.NotFoundException(`Partner with ID ${id} not found`);
        }
        return updatedPartner;
    }
    async remove(id) {
        const result = await this.partnerModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new common_1.NotFoundException(`Partner with ID ${id} not found`);
        }
    }
    async toggleStatus(id) {
        const partner = await this.findOne(id);
        return await this.update(id, { isActive: !partner.isActive });
    }
    async reorderPartners(partnerIds) {
        const updatePromises = partnerIds.map((id, index) => this.update(id, { displayOrder: index }));
        return await Promise.all(updatePromises);
    }
    async getActivePartners() {
        return await this.partnerModel
            .find({ isActive: true })
            .sort({ displayOrder: 1, createdAt: -1 })
            .select('name imageUrl website description displayOrder')
            .exec();
    }
};
exports.PartnerService = PartnerService;
exports.PartnerService = PartnerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(partner_schema_1.Partner.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PartnerService);
//# sourceMappingURL=partner.service.js.map