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
const client_1 = require("@prisma/client");
const app = (0, express_1.default)();
const prismaClient = new client_1.PrismaClient();
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield prismaClient.user.findMany();
        res.status(200).json({
            success: true,
            payload: {
                message: "server working!",
                data: data
            }
        });
    }
    catch (e) {
        res.status(404).json({
            success: false,
            payload: {
                message: "data not found \n \n \n \n" + e.message,
            }
        });
    }
}));
app.get("/create", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield prismaClient.user.create({
            data: {
                username: "afasdf",
                password: "asdfghjkl"
            }
        });
        const data = yield prismaClient.user.findMany({});
        res.status(200).json({
            success: true,
            payload: {
                message: "create success",
                data
            }
        });
    }
    catch (e) {
        res.status(402).json({
            success: false,
            payload: {
                message: "not able to create data " + e.message,
            }
        });
    }
}));
app.listen(3000, () => console.log("working"));
