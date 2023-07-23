// Classe Endereço
class Endereco {
    CEP: string;
    logradouro: string;
    numero: string;
    complemento: string;
    cidade: string;
    uf: string;
  
    constructor(
      CEP: string,
      logradouro: string,
      numero: string,
      complemento: string,
      cidade: string,
      uf: string
    ) {
      this.CEP = CEP;
      this.logradouro = logradouro;
      this.numero = numero;
      this.complemento = complemento;
      this.cidade = cidade;
      this.uf = uf;
    }
  }
  
  // Classe abstrata Pessoa
  abstract class Pessoa {
    cpf: string;
    nome: string;
    telefone: string;
  
    constructor(cpf: string, nome: string, telefone: string) {
      this.cpf = cpf;
      this.nome = nome;
      this.telefone = telefone;
    }
  
    // Método abstrato para ser implementado nas subclasses
    abstract autenticar(): boolean;
  }
  
  // Classe Cargo
  class Cargo {
    nome: string;
  
    constructor(nome: string) {
      this.nome = nome;
    }
  }
  
  // Classe Funcionario
  class Funcionario extends Pessoa {
    salario: number;
  
    constructor(cpf: string, nome: string, telefone: string, salario: number) {
      super(cpf, nome, telefone);
      this.salario = salario;
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
    vip: boolean;
    enderecos: Endereco[];
  
    constructor(cpf: string, nome: string, telefone: string, vip: boolean) {
      super(cpf, nome, telefone);
      this.vip = vip;
      this.enderecos = [];
    }
  
    listarEnderecos(): void {
      console.log(this.enderecos);
    }
  
    // Implementação do método autenticar da interface IUsuario
    autenticar(): boolean {
      // Implementação da autenticação
      return true;
    }
  }
  
  // Classe abstrata Conta
  abstract class Conta {
    numero: string;
  
    constructor(numero: string) {
      this.numero = numero;
    }
  
    abstract depositar(valor: number): void;
    abstract sacar(valor: number): void;
  }
  
  // Classe Debito
  class Debito {
    valor: number;
    data: Date;
  
    constructor(valor: number, data: Date) {
      this.valor = valor;
      this.data = data;
    }
  }
  
  // Classe Credito
  class Credito {
    valor: number;
    data: Date;
  
    constructor(valor: number, data: Date) {
      this.valor = valor;
      this.data = data;
    }
  }
  
  // Classe ContaCorrente
  class ContaCorrente extends Conta {
    limite: number;
  
    constructor(numero: string, limite: number) {
      super(numero);
      this.limite = limite;
    }
  
    depositar(valor: number): void {
      // Implementação do método depositar
    }
  
    sacar(valor: number): void {
      // Implementação do método sacar
    }
  
    transferir(contaDestino: Conta, valor: number): void {
      // Implementação da transferência
    }
  
    CalcularSaldo(): number {
      // Implementação do cálculo do saldo
      return 0;
    }
  }
  
  // Classe ContaPoupanca
  class ContaPoupanca extends Conta {
    depositar(valor: number): void {
      // Implementação do método depositar
    }
  
    sacar(valor: number): void {
      // Implementação do método sacar
    }
  
    calcularSaldo(): number {
      // Implementação do cálculo do saldo
      return 0;
    }
  }
  