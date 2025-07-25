import { ContactService } from '../services/contact.service';
import { ContactSubmissionDto, ContactInfoDto } from '../dto/contact.dto';
export declare class ContactController {
    private readonly contactService;
    constructor(contactService: ContactService);
    getContactInfo(): Promise<{
        success: boolean;
        data: import("../schemas/contact-info.schema").ContactInfo;
    }>;
    submitContactForm(contactSubmissionDto: ContactSubmissionDto): Promise<{
        success: boolean;
        message: string;
        data: {
            name: string;
            email: string;
            mobile: string;
            submittedAt: Date;
        };
    }>;
    getContactSubmissions(): Promise<{
        success: boolean;
        data: import("../schemas/contact-submission.schema").ContactSubmission[];
        count: number;
    }>;
    updateContactInfo(contactInfoDto: ContactInfoDto): Promise<{
        success: boolean;
        message: string;
        data: import("../schemas/contact-info.schema").ContactInfo;
    }>;
}
