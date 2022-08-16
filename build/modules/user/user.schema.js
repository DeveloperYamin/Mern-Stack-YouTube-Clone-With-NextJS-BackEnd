"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUserSchema = void 0;
const zod_1 = require("zod");
exports.registerUserSchema = {
    body: (0, zod_1.object)({
        username: (0, zod_1.string)({ required_error: "Username is required" }),
        email: (0, zod_1.string)({ required_error: "Email is required" }),
        password: (0, zod_1.string)({ required_error: "Password is required" }).min(6, "Password must be at least 6 characters long"),
        confirmPassword: (0, zod_1.string)({ required_error: "Confirm password is required" }),
    }).refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    }),
};
