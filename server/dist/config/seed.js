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
const PrismaClient_1 = require("./PrismaClient");
const HashingPassword_1 = require("./../helpers/HashingPassword");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    yield PrismaClient_1.prisma.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        yield tx.user.createMany({
            data: [
                {
                    fullname: 'Alpha Test',
                    email: 'alpha@test.com',
                    password: yield (0, HashingPassword_1.HashingPassword)({ password: 'test1234' }),
                },
            ],
        });
    }));
});
main()
    .catch((error) => {
    console.log(error);
    process.exit(1);
})
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield PrismaClient_1.prisma.$disconnect();
}));
