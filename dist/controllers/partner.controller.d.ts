import { PartnerService } from '../services/partner.service';
import { CreatePartnerDto, UpdatePartnerDto } from '../dto/partner.dto';
export declare class PartnerController {
    private readonly partnerService;
    constructor(partnerService: PartnerService);
    create(createPartnerDto: CreatePartnerDto): Promise<import("../schemas/partner.schema").Partner>;
    findAll(includeInactive?: boolean): Promise<import("../schemas/partner.schema").Partner[]>;
    getActivePartners(): Promise<import("../schemas/partner.schema").Partner[]>;
    findOne(id: string): Promise<import("../schemas/partner.schema").Partner>;
    update(id: string, updatePartnerDto: UpdatePartnerDto): Promise<import("../schemas/partner.schema").Partner>;
    remove(id: string): Promise<void>;
    toggleStatus(id: string): Promise<import("../schemas/partner.schema").Partner>;
    reorderPartners(partnerIds: string[]): Promise<import("../schemas/partner.schema").Partner[]>;
}
