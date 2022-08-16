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
Object.defineProperty(exports, "__esModule", { value: true });
exports.findVideos = exports.findVideo = exports.createVideo = void 0;
const video_model_1 = require("./video.model");
const createVideo = ({ owner }) => __awaiter(void 0, void 0, void 0, function* () {
    return video_model_1.VideoModel.create({ owner });
});
exports.createVideo = createVideo;
const findVideo = (videoId) => __awaiter(void 0, void 0, void 0, function* () {
    return video_model_1.VideoModel.findOne({ videoId });
});
exports.findVideo = findVideo;
const findVideos = () => __awaiter(void 0, void 0, void 0, function* () {
    return video_model_1.VideoModel.find({
        published: true,
    }).lean();
});
exports.findVideos = findVideos;
