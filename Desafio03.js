"use strict";
// Classe Endereço
class Endereco {
    constructor(CEP, logradouro, numero, complemento, cidade, uf) {
        this.CEP = CEP;
        this.logradouro = logradouro;
        this.numero = numero;
        this.complemento = complemento;
        this.cidade = cidade;
        this.uf = uf;
    }
}
// Classe abstrata Pessoa
class Pessoa {
    constructor(cpf, nome, telefone) {
        this.cpf = cpf;
        this.nome = nome;
        this.telefone = telefone;
    }
}
// Classe Cargo
class Cargo {
    constructor(nome) {
        this.nome = nome;
    }
}
// Classe Funcionario
class Funcionario extends Pessoa {
    constructor(cpf, nome, telefone, salario) {
        super(cpf, nome, telefone);
        this.salario = salario;
    }
    // Implementação do método autenticar da interface IUsuario
    autenticar() {
        // Implementação da autenticação
        return true;
    }
}
// Classe Cliente
class Cliente extends Pessoa {
    constructor(cpf, nome, telefone, vip, enderecos) {
        super(cpf, nome, telefone);
        this.vip = vip;
        this.enderecos = enderecos;
    }
    listarEnderecos() {
        console.log("Endereços do cliente:", this.enderecos);
    }
    // Implementação do método autenticar da interface IUsuario
    autenticar() {
        // Implementação da autenticação
        return true;
    }
}
// Classe abstrata Conta
class Conta {
    constructor(numero, saldo = 0) {
        this.numero = numero;
        this.saldo = saldo;
    }
}
// Classe Debito
class Debito {
    constructor(valor, data) {
        this.valor = valor;
        this.data = data;
    }
}
// Classe Credito
class Credito {
    constructor(valor, data) {
        this.valor = valor;
        this.data = data;
    }
}
// Classe ContaCorrente
class ContaCorrente extends Conta {
    constructor(numero, limite, saldo = 0) {
        super(numero, saldo);
        this.numero = numero;
        this.limite = limite;
    }
    depositar(valor) {
        const credito = new Credito(valor, new Date());
        this.saldo += valor;
        console.log("Depósito realizado:", credito);
    }
    sacar(valor) {
        if (valor <= this.saldo + this.limite) {
            const debito = new Debito(valor, new Date());
            this.saldo -= valor;
            console.log("Saque realizado:", debito);
        }
        else {
            console.log("Saldo insuficiente.");
        }
    }
    transferir(contaDestino, valor) {
        if (valor <= this.saldo + this.limite) {
            this.sacar(valor);
            contaDestino.depositar(valor);
            console.log("Transferência realizada.");
        }
        else {
            console.log("Saldo insuficiente para realizar a transferência.");
        }
    }
    calcularSaldo() {
        return this.saldo;
    }
}
// Classe ContaPoupanca
class ContaPoupanca extends Conta {
    constructor(numero, saldo = 0) {
        super(numero, saldo);
        this.numero = numero;
    }
    depositar(valor) {
        const credito = new Credito(valor, new Date());
        this.saldo += valor;
        console.log("Depósito realizado:", credito);
    }
    sacar(valor) {
        if (valor <= this.saldo) {
            const debito = new Debito(valor, new Date());
            this.saldo -= valor;
            console.log("Saque realizado:", debito);
        }
        else {
            console.log("Saldo insuficiente.");
        }
    }
    calcularSaldo() {
        return this.saldo;
    }
}
// Aplicação 01 - Crie dois funcionários do banco, um gerente e um atendente.
console.log("--- Aplicação 01 ---");
const gerente = new Funcionario("111.111.111-11", "José", "(11) 98765-4321", 5000);
const atendente = new Funcionario("222.222.222-22", "Maria", "(11) 99999-8888", 2500);
console.log("Gerente:", gerente);
console.log("Atendente:", atendente);
