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
exports.ContactController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const contact_service_1 = require("../services/contact.service");
const contact_dto_1 = require("../dto/contact.dto");
let ContactController = class ContactController {
    contactService;
    constructor(contactService) {
        this.contactService = contactService;
    }
    async getContactInfo() {
        try {
            const contactInfo = await this.contactService.getContactInfo();
            return {
                success: true,
                data: contactInfo,
            };
        }
        catch (error) {
            throw new common_1.HttpException({
                success: false,
                message: 'Failed to retrieve contact information',
                error: error.message,
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async submitContactForm(contactSubmissionDto) {
        try {
            const submission = await this.contactService.submitContactForm(contactSubmissionDto);
            return {
                success: true,
                message: 'Thank you for contacting us! We will get back to you soon.',
                data: {
                    name: submission.name,
                    email: submission.email,
                    mobile: submission.mobile,
                    submittedAt: submission.submittedAt,
                },
            };
        }
        catch (error) {
            throw new common_1.HttpException({
                success: false,
                message: 'Failed to submit contact form',
                error: error.message,
            }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getContactSubmissions() {
        try {
            const submissions = await this.contactService.getContactSubmissions();
            return {
                success: true,
                data: submissions,
                count: submissions.length,
            };
        }
        catch (error) {
            throw new common_1.HttpException({
                success: false,
                message: 'Failed to retrieve contact submissions',
                error: error.message,
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async updateContactInfo(contactInfoDto) {
        try {
            const updatedInfo = await this.contactService.updateContactInfo(contactInfoDto);
            return {
                success: true,
                message: 'Contact information updated successfully',
                data: updatedInfo,
            };
        }
        catch (error) {
            throw new common_1.HttpException({
                success: false,
                message: 'Failed to update contact information',
                error: error.message,
            }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.ContactController = ContactController;
__decorate([
    (0, common_1.Get)('info'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get contact information',
        description: 'Retrieve phone number, email, and office address',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Contact information retrieved successfully',
        schema: {
            type: 'object',
            properties: {
                success: { type: 'boolean', example: true },
                data: {
                    type: 'object',
                    properties: {
                        phoneNumber: { type: 'string', example: '+1-800-123-4567' },
                        email: { type: 'string', example: 'contact@edtech.com' },
                        office: {
                            type: 'string',
                            example: '123 Education St, Learning City, LC 12345',
                        },
                    },
                },
            },
        },
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "getContactInfo", null);
__decorate([
    (0, common_1.Post)('submit'),
    (0, swagger_1.ApiOperation)({
        summary: 'Submit contact form',
        description: 'Submit a contact form with name, email, mobile, and message',
    }),
    (0, swagger_1.ApiBody)({ type: contact_dto_1.ContactSubmissionDto }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Contact form submitted successfully',
        schema: {
            type: 'object',
            properties: {
                success: { type: 'boolean', example: true },
                message: {
                    type: 'string',
                    example: 'Thank you for contacting us! We will get back to you soon.',
                },
                data: {
                    type: 'object',
                    properties: {
                        id: { type: 'string', example: '507f1f77bcf86cd799439011' },
                        name: { type: 'string', example: 'John Doe' },
                        email: { type: 'string', example: 'john.doe@example.com' },
                        mobile: { type: 'string', example: '+1234567890' },
                        submittedAt: { type: 'string', example: '2024-01-15T10:30:00Z' },
                    },
                },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Invalid input data',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contact_dto_1.ContactSubmissionDto]),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "submitContactForm", null);
__decorate([
    (0, common_1.Get)('submissions'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get all contact submissions',
        description: 'Retrieve all contact form submissions (Admin only)',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Contact submissions retrieved successfully',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "getContactSubmissions", null);
__decorate([
    (0, common_1.Put)('info'),
    (0, swagger_1.ApiOperation)({
        summary: 'Update contact information',
        description: 'Update phone number, email, and office address (Admin only)',
    }),
    (0, swagger_1.ApiBody)({ type: contact_dto_1.ContactInfoDto }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Contact information updated successfully',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contact_dto_1.ContactInfoDto]),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "updateContactInfo", null);
exports.ContactController = ContactController = __decorate([
    (0, swagger_1.ApiTags)('Contact'),
    (0, common_1.Controller)('contact'),
    __metadata("design:paramtypes", [contact_service_1.ContactService])
], ContactController);
//# sourceMappingURL=contact.controller.js.map