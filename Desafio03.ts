// Classe Endereço
class Endereco {
  constructor(
    public CEP: string,
    public logradouro: string,
    public numero: string,
    public complemento: string,
    public cidade: string,
    public uf: string
  ) {}
}

// Classe abstrata Pessoa
abstract class Pessoa {
  constructor(
    public cpf: string,
    public nome: string,
    public telefone: string
  ) {}

  // Método abstrato para ser implementado nas subclasses
  abstract autenticar(): boolean;
}

// Classe Cargo
class Cargo {
  constructor(public nome: string) {}
}

// Classe Funcionario
class Funcionario extends Pessoa {
  constructor(
    cpf: string,
    nome: string,
    telefone: string,
    public salario: number
  ) {
    super(cpf, nome, telefone);
  }

  // Implementação do método autenticar da interface IUsuario
  autenticar(): boolean {
    // Implementação da autenticação
    return true;
  }
}

// Interface IUsuario
interface IUsuario {
  autenticar(): boolean;
}

// Classe Cliente
class Cliente extends Pessoa implements IUsuario {
  constructor(
    cpf: string,
    nome: string,
    telefone: string,
    public vip: boolean,
    public enderecos: Endereco[]
  ) {
    super(cpf, nome, telefone);
  }

  listarEnderecos(): void {
    console.log("Endereços do cliente:", this.enderecos);
  }

  // Implementação do método autenticar da interface IUsuario
  autenticar(): boolean {
    // Implementação da autenticação
    return true;
  }
}

// Classe abstrata Conta
abstract class Conta {
  constructor(public numero: string, protected saldo: number = 0) {}

  abstract depositar(valor: number): void;
  abstract sacar(valor: number): void;
}

// Classe Debito
class Debito {
  constructor(public valor: number, public data: Date) {}
}

// Classe Credito
class Credito {
  constructor(public valor: number, public data: Date) {}
}

// Classe ContaCorrente
class ContaCorrente extends Conta {
  constructor(public numero: string, private limite: number, saldo: number = 0) {
    super(numero, saldo);
  }

  depositar(valor: number): void {
    const credito = new Credito(valor, new Date());
    this.saldo += valor;
    console.log("Depósito realizado:", credito);
  }

  sacar(valor: number): void {
    if (valor <= this.saldo + this.limite) {
      const debito = new Debito(valor, new Date());
      this.saldo -= valor;
      console.log("Saque realizado:", debito);
    } else {
      console.log("Saldo insuficiente.");
    }
  }

  transferir(contaDestino: Conta, valor: number): void {
    if (valor <= this.saldo + this.limite) {
      this.sacar(valor);
      contaDestino.depositar(valor);
      console.log("Transferência realizada.");
    } else {
      console.log("Saldo insuficiente para realizar a transferência.");
    }
  }

  calcularSaldo(): number {
    return this.saldo;
  }
}

// Classe ContaPoupanca
class ContaPoupanca extends Conta {
  constructor(public numero: string, saldo: number = 0) {
    super(numero, saldo);
  }

  depositar(valor: number): void {
    const credito = new Credito(valor, new Date());
    this.saldo += valor;
    console.log("Depósito realizado:", credito);
  }

  sacar(valor: number): void {
    if (valor <= this.saldo) {
      const debito = new Debito(valor, new Date());
      this.saldo -= valor;
      console.log("Saque realizado:", debito);
    } else {
      console.log("Saldo insuficiente.");
    }
  }

  calcularSaldo(): number {
    return this.saldo;
  }
}

// Aplicação 1
console.log("--- Aplicação 1 ---");
const gerente = new Funcionario("111.111.111-11", "José", "(11) 98765-4321", 5000);
const atendente = new Funcionario("222.222.222-22", "Maria", "(11) 99999-8888", 2500);

console.log("Gerente:", gerente);
console.log("Atendente:", atendente);