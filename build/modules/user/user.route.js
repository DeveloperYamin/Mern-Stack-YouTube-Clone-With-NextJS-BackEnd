"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const zod_express_middleware_1 = require("zod-express-middleware");
const requireUser_1 = __importDefault(require("../../middleware/requireUser"));
const user_controller_1 = require("./user.controller");
const user_schema_1 = require("./user.schema");
const router = express_1.default.Router();
router.get("/", requireUser_1.default, (req, res) => {
    return res.send(res.locals.user);
});
router.post("/", (0, zod_express_middleware_1.processRequestBody)(user_schema_1.registerUserSchema.body), user_controller_1.registerUserHandler);
exports.default = router;
