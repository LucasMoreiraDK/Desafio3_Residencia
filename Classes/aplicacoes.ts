import Funcionario from "./funcionario";
import Cliente from "./cliente";
import Endereco from "./endereco";
import ContaCorrente from "./contacorrente";
import ContaPoupanca from "./contapoupanca";

// Aplicação 1
console.log("--- Aplicação 1 ---");
const gerente = new Funcionario("111.111.111-11", "José", "(11) 98765-4321", 5000);
const atendente = new Funcionario("222.222.222-22", "Maria", "(11) 99999-8888", 2500);
console.log("Gerente:", gerente);
console.log("Atendente:", atendente);

// Aplicação 2
console.log("\n--- Aplicação 2 ---");
const endereco1 = new Endereco("12345-678", "Rua A", "123", "Apto 101", "São Paulo", "SP");
const endereco2 = new Endereco("54321-987", "Rua B", "456", "", "Rio de Janeiro", "RJ");
const endereco3 = new Endereco("98765-432", "Rua C", "789", "Casa", "Belo Horizonte", "MG");

const cliente = new Cliente("333.333.333-33", "Ana Cliente", "(11) 11111-2222", true, [
  endereco1,
  endereco2,
  endereco3,
]);

cliente.listarEnderecos();

// Aplicação 3
console.log("\n--- Aplicação 3 ---");
const contaCorrenteCliente = new ContaCorrente("12345", 1000);
contaCorrenteCliente.depositar(100);
contaCorrenteCliente.depositar(100);
contaCorrenteCliente.depositar(100);
contaCorrenteCliente.sacar(50);

console.log("Saldo da conta corrente:", contaCorrenteCliente.calcularSaldo());

// Aplicação 4
console.log("\n--- Aplicação 4 ---");
const contaCorrenteCliente2 = new ContaCorrente("54321", 500);
contaCorrenteCliente2.depositar(1000);

const contaPoupancaCliente = new ContaPoupanca("98765");
contaPoupancaCliente.depositar(1000);

contaCorrenteCliente2.transferir(contaPoupancaCliente, 500);

console.log("Saldo da conta-corrente:", contaCorrenteCliente2.calcularSaldo());
console.log("Saldo da conta-poupança:", contaPoupancaCliente.calcularSaldo());

// Aplicação 5
console.log("\n--- Aplicação 5 ---");
const contaCorrenteCliente3 = new ContaCorrente("11111", 0, 300);
contaCorrenteCliente3.depositar(300);
contaCorrenteCliente3.limite = 100;

const contaCorrenteCliente4 = new ContaCorrente("22222", 0);
contaCorrenteCliente4.depositar(100);

contaCorrenteCliente3.transferir(contaCorrenteCliente4, 1000);
