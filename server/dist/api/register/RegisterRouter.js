"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const RegisterController_1 = require("./RegisterController");
const router = (0, express_1.Router)();
router.use('/', RegisterController_1.userRegister);
exports.default = router;
