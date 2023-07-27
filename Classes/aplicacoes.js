"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var funcionario_1 = require("./funcionario");
var cliente_1 = require("./cliente");
var endereco_1 = require("./endereco");
var contacorrente_1 = require("./contacorrente");
var contapoupanca_1 = require("./contapoupanca");




// Aplicação 01 - Crie dois funcionários do banco, um gerente e um atendente.
console.log("--- Aplicação 1 ---");
var gerente = new funcionario_1.default("111.111.111-11", "José", "(11) 98765-4321", 5000);
var atendente = new funcionario_1.default("222.222.222-22", "Maria", "(11) 99999-8888", 2500);
console.log("Gerente:", gerente);
console.log("Atendente:", atendente);
// Aplicação 2 - Criar um cliente com 3 endereços para UM cliente
console.log("\n--- Aplicação 2 ---");
var endereco1 = new endereco_1.default("12345-678", "Rua A", "123", "Apto 101", "São Paulo", "SP");
var endereco2 = new endereco_1.default("54321-987", "Rua B", "456", "", "Rio de Janeiro", "RJ");
var endereco3 = new endereco_1.default("98765-432", "Rua C", "789", "Casa", "Belo Horizonte", "MG");
var cliente = new cliente_1.default("333.333.333-33", "Ana Cliente", "(11) 11111-2222", true, [
    endereco1,
    endereco2,
    endereco3,
]);
cliente.listarEnderecos();
// Aplicação 3 - Criar cliente > Fazer 3 depositos de 100 em contaCorrente > saque de 50 em contaCorreio > imprimir valor
console.log("\n--- Aplicação 3 ---");
var contaCorrenteCliente = new contacorrente_1.default("12345", 1000);
contaCorrenteCliente.depositar(100);
contaCorrenteCliente.depositar(100);
contaCorrenteCliente.depositar(100);
contaCorrenteCliente.sacar(50);
console.log("Saldo da conta corrente:", contaCorrenteCliente.calcularSaldo());
// Aplicação 4  -- Criar cliente com contaCorrente > Deposito de 1000 na contacorrente > criar cliente com contaPoupança > deposito de 100 na contaPoupança > transferir 500 reais da ContaCorrente para ContaPoupanca > Exibir saldo de ambas as contas
console.log("\n--- Aplicação 4 ---");
var contaCorrenteCliente2 = new contacorrente_1.default("54321", 500);
contaCorrenteCliente2.depositar(1000);
var contaPoupancaCliente = new contapoupanca_1.default("98765");
contaPoupancaCliente.depositar(1000);
contaCorrenteCliente2.transferir(contaPoupancaCliente, 500);
console.log("Saldo da conta-corrente:", contaCorrenteCliente2.calcularSaldo());
console.log("Saldo da conta-poupança:", contaPoupancaCliente.calcularSaldo());
// Aplicação 5 - Criar Cliente com conta corrente > deoisuti de 300 > limite contacorrente para 100 > criar outro cliente com contacorrente > tentar transferir 1000 da primeira conta pra segunda
console.log("\n--- Aplicação 5 ---");
var contaCorrenteCliente3 = new contacorrente_1.default("11111", 0, 300);
contaCorrenteCliente3.depositar(300);
contaCorrenteCliente3.limite = 100;
var contaCorrenteCliente4 = new contacorrente_1.default("22222", 0);
contaCorrenteCliente4.depositar(100);
contaCorrenteCliente3.transferir(contaCorrenteCliente4, 1000);
