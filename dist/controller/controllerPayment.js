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
exports.controllerPayment = void 0;
const { request: Req } = require('express');
const { response: Res } = require('express');
const Omise = require('omise');
const omiseConfig = Omise({
    publicKey: "",
    secretKey: ""
});
const currencyType = "thb";
const controllerPayment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { token, amount } = req.body;
    if (!token) {
        try {
            const charge = yield omiseConfig.charges.create({
                amount,
                currency: currencyType,
                card: token
            });
            res.status(200).json({ message: "success", charge });
        }
        catch (err) {
            res.status(500).json({ message: err || 'An error occurred while creating charge' });
        }
    }
    else {
        res.status(500).json({ message: 'An error occurred while creating charge' });
    }
});
exports.controllerPayment = controllerPayment;
