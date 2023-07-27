abstract class Conta {
    constructor(public numero: string, protected saldo: number = 0) {}
  
    abstract depositar(valor: number): void;
    abstract sacar(valor: number): void;
  }
  
  export default Conta;
  