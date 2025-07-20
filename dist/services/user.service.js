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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("../schemas/user.schema");
let UserService = class UserService {
    userModel;
    constructor(userModel) {
        this.userModel = userModel;
    }
    async createUser(createUserDto) {
        try {
            const existingUser = await this.userModel.findOne({
                phone: createUserDto.phone,
            });
            if (existingUser) {
                throw new common_1.ConflictException('User with this phone number already exists');
            }
            const existingEmailUser = await this.userModel.findOne({
                email: createUserDto.email,
            });
            if (existingEmailUser) {
                throw new common_1.ConflictException('User with this email already exists');
            }
            const user = new this.userModel(createUserDto);
            return await user.save();
        }
        catch (error) {
            if (error instanceof common_1.ConflictException) {
                throw error;
            }
            throw new common_1.BadRequestException('Failed to create user');
        }
    }
    async submitEnquiryForm(enquiryFormDto) {
        try {
            const existingUser = await this.userModel.findOne({
                phone: enquiryFormDto.phone,
            });
            if (existingUser) {
                existingUser.important = true;
                existingUser.enquiryCount += 1;
                existingUser.lastEnquiryDate = new Date();
                existingUser.name = enquiryFormDto.name;
                existingUser.email = enquiryFormDto.email;
                existingUser.interest = enquiryFormDto.interest;
                existingUser.stream = enquiryFormDto.stream;
                if (enquiryFormDto.message) {
                    existingUser.message = enquiryFormDto.message;
                }
                return await existingUser.save();
            }
            else {
                const newUser = new this.userModel({
                    ...enquiryFormDto,
                    enquiryCount: 1,
                    lastEnquiryDate: new Date(),
                });
                return await newUser.save();
            }
        }
        catch (error) {
            throw new common_1.BadRequestException('Failed to submit enquiry form - ' + error.message);
        }
    }
    async addToCart(userId, courseId) {
        const user = await this.userModel.findById(userId);
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const courseObjectId = new mongoose_2.Types.ObjectId(courseId);
        if (user.cart.some((id) => id.equals(courseObjectId))) {
            throw new common_1.BadRequestException('Course already in cart');
        }
        if (user.purchasedCourses.some((id) => id.equals(courseObjectId))) {
            throw new common_1.BadRequestException('Course already purchased');
        }
        user.cart.push(courseObjectId);
        return await user.save();
    }
    async removeFromCart(userId, courseId) {
        const user = await this.userModel.findById(userId);
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const courseObjectId = new mongoose_2.Types.ObjectId(courseId);
        const courseIndex = user.cart.findIndex((id) => id.equals(courseObjectId));
        if (courseIndex === -1) {
            throw new common_1.BadRequestException('Course not found in cart');
        }
        user.cart.splice(courseIndex, 1);
        return await user.save();
    }
    async getUserCart(userId) {
        const user = await this.userModel.findById(userId).populate({
            path: 'cart',
            select: 'title description price image duration level instructor',
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const totalAmount = user.cart.reduce((total, course) => {
            return total + (course.price || 0);
        }, 0);
        return {
            cart: user.cart,
            cartCount: user.cart.length,
            totalAmount,
        };
    }
    async clearCart(userId) {
        const user = await this.userModel.findById(userId);
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        user.cart = [];
        return await user.save();
    }
    async updateCart(userId, courseIds) {
        const user = await this.userModel.findById(userId);
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const courseObjectIds = [...new Set(courseIds)].map((id) => new mongoose_2.Types.ObjectId(id));
        const validCourseIds = courseObjectIds.filter((courseId) => !user.purchasedCourses.some((purchasedId) => purchasedId.equals(courseId)));
        user.cart = validCourseIds;
        return await user.save();
    }
    async purchaseCartItems(userId) {
        const user = await this.userModel.findById(userId);
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        if (user.cart.length === 0) {
            throw new common_1.BadRequestException('Cart is empty');
        }
        user.purchasedCourses.push(...user.cart);
        user.cart = [];
        return await user.save();
    }
    async getUserPurchasedCourses(userId) {
        const user = await this.userModel.findById(userId).populate({
            path: 'purchasedCourses',
            select: 'title description image duration level instructor',
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        return {
            courses: user.purchasedCourses,
            totalCourses: user.purchasedCourses.length,
        };
    }
    async findAll(queryDto) {
        const { page = 1, limit = 10, search, status, important, interest, stream, } = queryDto;
        const filter = {};
        if (search) {
            filter.$or = [
                { name: { $regex: search, $options: 'i' } },
                { email: { $regex: search, $options: 'i' } },
            ];
        }
        if (status) {
            filter.status = status;
        }
        if (important !== undefined) {
            filter.important = important;
        }
        if (interest) {
            filter.interest = { $regex: interest, $options: 'i' };
        }
        if (stream) {
            filter.stream = { $regex: stream, $options: 'i' };
        }
        const total = await this.userModel.countDocuments(filter);
        const totalPages = Math.ceil(total / limit);
        const skip = (page - 1) * limit;
        const users = await this.userModel
            .find(filter)
            .populate('cart', 'title price')
            .populate('purchasedCourses', 'title')
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)
            .exec();
        return {
            users,
            total,
            page,
            totalPages,
        };
    }
    async findOne(id) {
        const user = await this.userModel
            .findById(id)
            .populate('cart', 'title description price image')
            .populate('purchasedCourses', 'title description image');
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        return user;
    }
    async findByPhone(phone) {
        return await this.userModel
            .findOne({ phone })
            .populate('cart', 'title price')
            .populate('purchasedCourses', 'title');
    }
    async findByEmail(email) {
        return await this.userModel
            .findOne({ email })
            .populate('cart', 'title price')
            .populate('purchasedCourses', 'title');
    }
    async update(id, updateUserDto) {
        const user = await this.userModel.findByIdAndUpdate(id, { ...updateUserDto, updatedAt: new Date() }, { new: true, runValidators: true });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        return user;
    }
    async remove(id) {
        const result = await this.userModel.findByIdAndDelete(id);
        if (!result) {
            throw new common_1.NotFoundException('User not found');
        }
        return { message: 'User deleted successfully' };
    }
    async getImportantUsers() {
        return await this.userModel
            .find({ important: true })
            .populate('cart', 'title price')
            .sort({ lastEnquiryDate: -1 })
            .exec();
    }
    async getUserStats() {
        const totalUsers = await this.userModel.countDocuments();
        const activeUsers = await this.userModel.countDocuments({
            status: 'active',
        });
        const importantUsers = await this.userModel.countDocuments({
            important: true,
        });
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const todayEnquiries = await this.userModel.countDocuments({
            createdAt: { $gte: today, $lt: tomorrow },
        });
        const cartStats = await this.userModel.aggregate([
            {
                $project: {
                    cartCount: { $size: '$cart' },
                    hasCartItems: { $gt: [{ $size: '$cart' }, 0] },
                },
            },
            {
                $group: {
                    _id: null,
                    totalCartItems: { $sum: '$cartCount' },
                    usersWithCartItems: { $sum: { $cond: ['$hasCartItems', 1, 0] } },
                },
            },
        ]);
        const cartStatsResult = cartStats[0] || {
            totalCartItems: 0,
            usersWithCartItems: 0,
        };
        return {
            totalUsers,
            activeUsers,
            importantUsers,
            todayEnquiries,
            totalCartItems: cartStatsResult.totalCartItems,
            usersWithCartItems: cartStatsResult.usersWithCartItems,
        };
    }
    async addToPurchasedCourses(userId, courseId) {
        const user = await this.userModel.findById(userId);
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const courseObjectId = new mongoose_2.Types.ObjectId(courseId);
        if (user.purchasedCourses.some((id) => id.equals(courseObjectId))) {
            throw new common_1.BadRequestException('Course already purchased');
        }
        user.purchasedCourses.push(courseObjectId);
        const cartIndex = user.cart.findIndex((id) => id.equals(courseObjectId));
        if (cartIndex !== -1) {
            user.cart.splice(cartIndex, 1);
        }
        return await user.save();
    }
    async removeFromPurchasedCourses(userId, courseId) {
        const user = await this.userModel.findById(userId);
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const courseObjectId = new mongoose_2.Types.ObjectId(courseId);
        const courseIndex = user.purchasedCourses.findIndex((id) => id.equals(courseObjectId));
        if (courseIndex === -1) {
            throw new common_1.BadRequestException('Course not found in purchased courses');
        }
        user.purchasedCourses.splice(courseIndex, 1);
        return await user.save();
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserService);
//# sourceMappingURL=user.service.js.map