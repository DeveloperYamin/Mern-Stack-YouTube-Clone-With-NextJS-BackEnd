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
const database_1 = require("./database");
const logger_1 = __importDefault(require("./logger"));
const shutdownGracefully = (server, signals) => {
    signals.forEach((signal) => {
        process.on(signal, () => __awaiter(void 0, void 0, void 0, function* () {
            logger_1.default.info(`Received ${signal}, shutting down gracefully`);
            server.close(() => __awaiter(void 0, void 0, void 0, function* () {
                logger_1.default.info("Server gracefully stopped");
                //disconnect from database
                yield (0, database_1.disconnectFromDatabase)();
                process.exit(0);
            }));
        }));
    });
};
exports.default = shutdownGracefully;
