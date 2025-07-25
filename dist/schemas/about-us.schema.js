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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AboutUsSchema = exports.AboutUs = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let AboutUs = class AboutUs {
    image;
    title;
    description;
    whyChooseUs;
    isActive;
    order;
};
exports.AboutUs = AboutUs;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], AboutUs.prototype, "image", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], AboutUs.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], AboutUs.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [String],
        required: true,
        validate: {
            validator: function (v) {
                return v.length === 6;
            },
            message: 'Exactly 6 reasons must be provided'
        }
    }),
    __metadata("design:type", Array)
], AboutUs.prototype, "whyChooseUs", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], AboutUs.prototype, "isActive", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], AboutUs.prototype, "order", void 0);
exports.AboutUs = AboutUs = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        collection: 'aboutus'
    })
], AboutUs);
exports.AboutUsSchema = mongoose_1.SchemaFactory.createForClass(AboutUs);
//# sourceMappingURL=about-us.schema.js.map