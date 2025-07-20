export declare class CreatePartnerDto {
    name: string;
    imageUrl: string;
    website?: string;
    description?: string;
    displayOrder?: number;
    isActive?: boolean;
}
export declare class UpdatePartnerDto {
    name?: string;
    imageUrl?: string;
    website?: string;
    description?: string;
    displayOrder?: number;
    isActive?: boolean;
}
export declare class PartnerResponseDto {
    _id: string;
    name: string;
    imageUrl: string;
    website?: string;
    description?: string;
    isActive: boolean;
    displayOrder: number;
    createdAt: Date;
    updatedAt: Date;
}
