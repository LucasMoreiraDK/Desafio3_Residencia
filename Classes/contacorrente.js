"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var conta_1 = require("./conta");
var debito_1 = require("./debito");
var credito_1 = require("./credito");
var ContaCorrente = /** @class */ (function (_super) {
    __extends(ContaCorrente, _super);
    function ContaCorrente(numero, limite, saldo) {
        if (saldo === void 0) { saldo = 0; }
        var _this = _super.call(this, numero, saldo) || this;
        _this.numero = numero;
        _this.limite = limite;
        return _this;
    }
    ContaCorrente.prototype.depositar = function (valor) {
        var credito = new credito_1.default(valor, new Date());
        this.saldo += valor;
        console.log("Depósito realizado:", credito);
    };
    ContaCorrente.prototype.sacar = function (valor) {
        if (valor <= this.saldo + this.limite) {
            var debito = new debito_1.default(valor, new Date());
            this.saldo -= valor;
            console.log("Saque realizado:", debito);
        }
        else {
            console.log("Saldo insuficiente.");
        }
    };
    ContaCorrente.prototype.transferir = function (contaDestino, valor) {
        if (valor <= this.saldo + this.limite) {
            this.sacar(valor);
            contaDestino.depositar(valor);
            console.log("Transferência realizada.");
        }
        else {
            console.log("Saldo insuficiente para realizar a transferência.");
        }
    };
    ContaCorrente.prototype.calcularSaldo = function () {
        return this.saldo;
    };
    return ContaCorrente;
}(conta_1.default));
exports.default = ContaCorrente;
