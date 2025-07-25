import { Model } from 'mongoose';
import { ContactInfo, ContactInfoDocument } from '../schemas/contact-info.schema';
import { ContactSubmission, ContactSubmissionDocument } from '../schemas/contact-submission.schema';
import { ContactSubmissionDto, ContactInfoDto } from '../dto/contact.dto';
export declare class ContactService {
    private contactInfoModel;
    private contactSubmissionModel;
    constructor(contactInfoModel: Model<ContactInfoDocument>, contactSubmissionModel: Model<ContactSubmissionDocument>);
    getContactInfo(): Promise<ContactInfo>;
    updateContactInfo(contactInfoDto: ContactInfoDto): Promise<ContactInfo>;
    submitContactForm(contactSubmissionDto: ContactSubmissionDto): Promise<ContactSubmission>;
    getContactSubmissions(): Promise<ContactSubmission[]>;
    updateSubmissionStatus(id: string, status: string): Promise<ContactSubmission>;
}
