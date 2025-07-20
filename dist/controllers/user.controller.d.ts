import { UserService } from '../services/user.service';
import { CreateUserDto, UpdateUserDto, EnquiryFormDto, UserQueryDto, AddToCartDto, RemoveFromCartDto, UpdateCartDto } from '../dto/user.dto';
import { User } from '../schemas/user.schema';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<User>;
    submitEnquiry(enquiryFormDto: EnquiryFormDto): Promise<{
        message: string;
        user: User;
        isExistingUser: boolean;
    }>;
    addToCart(id: string, addToCartDto: AddToCartDto): Promise<{
        message: string;
        user: User;
        cartCount: number;
    }>;
    removeFromCart(id: string, removeFromCartDto: RemoveFromCartDto): Promise<{
        message: string;
        user: User;
        cartCount: number;
    }>;
    getUserCart(id: string): Promise<{
        cart: any[];
        cartCount: number;
        totalAmount?: number;
    }>;
    clearCart(id: string): Promise<{
        message: string;
        user: User;
    }>;
    updateCart(id: string, updateCartDto: UpdateCartDto): Promise<{
        message: string;
        user: User;
        cartCount: number;
    }>;
    findAll(queryDto: UserQueryDto): Promise<{
        users: User[];
        total: number;
        page: number;
        totalPages: number;
    }>;
    getStats(): Promise<{
        totalUsers: number;
        activeUsers: number;
        importantUsers: number;
        todayEnquiries: number;
        totalCartItems: number;
        usersWithCartItems: number;
    }>;
    getImportantUsers(): Promise<User[]>;
    findByPhone(phone: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    findOne(id: string): Promise<User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<User>;
    remove(id: string): Promise<{
        message: string;
    }>;
    addToPurchasedCourses(id: string, addToCartDto: AddToCartDto): Promise<{
        message: string;
        user: User;
        totalPurchasedCourses: number;
    }>;
    removeFromPurchasedCourses(id: string, removeFromCartDto: RemoveFromCartDto): Promise<{
        message: string;
        user: User;
        totalPurchasedCourses: number;
    }>;
}
