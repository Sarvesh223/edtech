export declare class SocialHandlesDto {
    twitter?: string;
    facebook?: string;
    instagram?: string;
}
export declare class CreateInstructorDto {
    name: string;
    designation: string;
    image: string;
    socialHandles?: SocialHandlesDto;
}
declare const UpdateInstructorDto_base: import("@nestjs/common").Type<Partial<CreateInstructorDto>>;
export declare class UpdateInstructorDto extends UpdateInstructorDto_base {
}
export declare class InstructorResponseDto {
    id: string;
    name: string;
    designation: string;
    image: string;
    socialHandles: SocialHandlesDto;
    createdAt: Date;
    updatedAt: Date;
}
export {};
