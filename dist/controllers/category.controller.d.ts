import { CategoryService } from '../services/category.service';
import { CreateCategoryDto } from '../dto/create-category.dto';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    getAllCategories(): Promise<{
        success: boolean;
        data: {
            _id: unknown;
            name: string;
            description: string;
            image: string;
            slug: string;
            courseCount: number;
        }[];
        total: number;
    }>;
    getCategoryBySlug(slug: string): Promise<{
        success: boolean;
        data: {
            courseCount: number;
            name: string;
            description: string;
            image: string;
            isActive: boolean;
            slug: string;
            _id: unknown;
            $locals: Record<string, unknown>;
            $op: "save" | "validate" | "remove" | null;
            $where: Record<string, unknown>;
            baseModelName?: string;
            collection: import("mongoose").Collection;
            db: import("mongoose").Connection;
            errors?: import("mongoose").Error.ValidationError;
            id?: any;
            isNew: boolean;
            schema: import("mongoose").Schema;
            __v: number;
        };
    }>;
    createCategory(createCategoryDto: CreateCategoryDto): Promise<{
        success: boolean;
        message: string;
        data: import("mongoose").Document<unknown, {}, import("../schemas/category.schema").Category, {}> & import("../schemas/category.schema").Category & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
    }>;
    updateCategory(id: string, updateCategoryDto: CreateCategoryDto): Promise<{
        success: boolean;
        message: string;
        data: import("mongoose").Document<unknown, {}, import("../schemas/category.schema").Category, {}> & import("../schemas/category.schema").Category & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
    }>;
    deleteCategory(id: string): Promise<{
        success: boolean;
        message: string;
    }>;
}
