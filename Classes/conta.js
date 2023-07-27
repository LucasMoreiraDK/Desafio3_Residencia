"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Conta = /** @class */ (function () {
    function Conta(numero, saldo) {
        if (saldo === void 0) { saldo = 0; }
        this.numero = numero;
        this.saldo = saldo;
    }
    return Conta;
}());
exports.default = Conta;
