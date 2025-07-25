import { Model } from 'mongoose';
import { Partner, PartnerDocument } from '../schemas/partner.schema';
import { CreatePartnerDto, UpdatePartnerDto } from '../dto/partner.dto';
export declare class PartnerService {
    private partnerModel;
    constructor(partnerModel: Model<PartnerDocument>);
    create(createPartnerDto: CreatePartnerDto): Promise<Partner>;
    findAll(includeInactive?: boolean): Promise<Partner[]>;
    findOne(id: string): Promise<Partner>;
    update(id: string, updatePartnerDto: UpdatePartnerDto): Promise<Partner>;
    remove(id: string): Promise<void>;
    toggleStatus(id: string): Promise<Partner>;
    reorderPartners(partnerIds: string[]): Promise<Partner[]>;
    getActivePartners(): Promise<Partner[]>;
}
