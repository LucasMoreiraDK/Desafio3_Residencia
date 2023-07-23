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
    constructor(cpf, nome, telefone, vip) {
        super(cpf, nome, telefone);
        this.vip = vip;
        this.enderecos = [];
    }
    listarEnderecos() {
        console.log(this.enderecos);
    }
    // Implementação do método autenticar da interface IUsuario
    autenticar() {
        // Implementação da autenticação
        return true;
    }
}
// Classe abstrata Conta
class Conta {
    constructor(numero) {
        this.numero = numero;
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
    constructor(numero, limite) {
        super(numero);
        this.limite = limite;
    }
    depositar(valor) {
        // Implementação do método depositar
    }
    sacar(valor) {
        // Implementação do método sacar
    }
    transferir(contaDestino, valor) {
        // Implementação da transferência
    }
    CalcularSaldo() {
        // Implementação do cálculo do saldo
        return 0;
    }
}
// Classe ContaPoupanca
class ContaPoupanca extends Conta {
    depositar(valor) {
        // Implementação do método depositar
    }
    sacar(valor) {
        // Implementação do método sacar
    }
    calcularSaldo() {
        // Implementação do cálculo do saldo
        return 0;
    }
}
