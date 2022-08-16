"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = require("./utils/database");
const logger_1 = __importDefault(require("./utils/logger"));
const shutdownGracefully_1 = __importDefault(require("./utils/shutdownGracefully"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const user_route_1 = __importDefault(require("./modules/user/user.route"));
const auth_route_1 = __importDefault(require("./modules/auth/auth.route"));
const deserializeUser_1 = __importDefault(require("./middleware/deserializeUser"));
const video_route_1 = __importDefault(require("./modules/videos/video.route"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
// Load environment variables from .env file
dotenv_1.default.config();
app.use((0, cors_1.default)({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use((0, helmet_1.default)());
app.use(deserializeUser_1.default);
app.get("/", (req, res) => res.send("Hello World!"));
app.use("/api/users", user_route_1.default);
app.use("/api/auth", auth_route_1.default);
app.use("/api/videos", video_route_1.default);
const server = app.listen(process.env.PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, database_1.connectToDatabase)();
    logger_1.default.info(`Server started on port ${process.env.PORT}`);
}));
// server shutdown
(0, shutdownGracefully_1.default)(server, ["SIGINT", "SIGTERM"]);
