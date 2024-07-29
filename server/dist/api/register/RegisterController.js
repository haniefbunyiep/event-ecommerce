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
exports.userRegister = void 0;
const RegisterService_1 = require("./RegisterService");
const userRegister = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { fullname, email, password, confirmPassword } = req.body;
        yield (0, RegisterService_1.userRegisterService)({ fullname, email, password, confirmPassword });
        return res.status(201).send({
            error: false,
            message: 'User Register Success',
            data: null,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.userRegister = userRegister;
