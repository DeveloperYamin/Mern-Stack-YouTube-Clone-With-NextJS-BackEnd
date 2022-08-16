"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.omit = void 0;
const omit = (obj, propriety) => {
    const keys = Array.isArray(propriety) ? propriety : [propriety];
    const newObj = Object.assign({}, obj);
    keys.forEach((key) => {
        delete newObj[key];
    });
    return newObj;
};
exports.omit = omit;
