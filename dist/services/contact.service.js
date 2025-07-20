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
exports.ContactService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const contact_info_schema_1 = require("../schemas/contact-info.schema");
const contact_submission_schema_1 = require("../schemas/contact-submission.schema");
let ContactService = class ContactService {
    contactInfoModel;
    contactSubmissionModel;
    constructor(contactInfoModel, contactSubmissionModel) {
        this.contactInfoModel = contactInfoModel;
        this.contactSubmissionModel = contactSubmissionModel;
    }
    async getContactInfo() {
        let contactInfo = await this.contactInfoModel.findOne({ isActive: true });
        if (!contactInfo) {
            const defaultContactInfo = new this.contactInfoModel({
                phoneNumber: '+1-800-EDTECH-1',
                email: 'contact@edtech.com',
                office: '123 Education Street, Learning City, LC 12345',
                isActive: true,
            });
            contactInfo = await defaultContactInfo.save();
        }
        return contactInfo;
    }
    async updateContactInfo(contactInfoDto) {
        let contactInfo = await this.contactInfoModel.findOne({ isActive: true });
        if (contactInfo) {
            contactInfo.phoneNumber = contactInfoDto.phoneNumber;
            contactInfo.email = contactInfoDto.email;
            contactInfo.office = contactInfoDto.office;
            return await contactInfo.save();
        }
        else {
            const newContactInfo = new this.contactInfoModel({
                ...contactInfoDto,
                isActive: true,
            });
            return await newContactInfo.save();
        }
    }
    async submitContactForm(contactSubmissionDto) {
        const submission = new this.contactSubmissionModel({
            ...contactSubmissionDto,
            submittedAt: new Date(),
            status: 'pending',
        });
        return await submission.save();
    }
    async getContactSubmissions() {
        return await this.contactSubmissionModel
            .find()
            .sort({ submittedAt: -1 })
            .exec();
    }
    async updateSubmissionStatus(id, status) {
        const submission = await this.contactSubmissionModel.findById(id);
        if (!submission) {
            throw new common_1.NotFoundException('Contact submission not found');
        }
        submission.status = status;
        return await submission.save();
    }
};
exports.ContactService = ContactService;
exports.ContactService = ContactService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(contact_info_schema_1.ContactInfo.name)),
    __param(1, (0, mongoose_1.InjectModel)(contact_submission_schema_1.ContactSubmission.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], ContactService);
//# sourceMappingURL=contact.service.js.map