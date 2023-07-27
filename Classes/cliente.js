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
var pessoa_1 = require("./pessoa");
var Cliente = /** @class */ (function (_super) {
    __extends(Cliente, _super);
    function Cliente(cpf, nome, telefone, vip, enderecos) {
        var _this = _super.call(this, cpf, nome, telefone) || this;
        _this.vip = vip;
        _this.enderecos = enderecos;
        return _this;
    }
    Cliente.prototype.listarEnderecos = function () {
        console.log("Endereços do cliente:", this.enderecos);
    };
    Cliente.prototype.autenticar = function () {
        return true;
    };
    return Cliente;
}(pessoa_1.default));
exports.default = Cliente;
