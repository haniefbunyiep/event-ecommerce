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
const cors_1 = __importDefault(require("cors"));
const router_1 = __importDefault(require("./api/router"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const PORT = 8000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(router_1.default);
app.use(body_parser_1.default.json());
app.use((err, req, res, next) => {
    const statusCode = err.status || 500;
    const statusMessage = err.message || 'Error';
    res.status(statusCode).send({
        error: true,
        message: statusMessage,
        data: null,
    });
});
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(`  ➜  [API] Local:   http://localhost:${PORT}/`);
    }
    catch (error) {
        console.error('Error connecting ngrok:', error);
    }
}));
