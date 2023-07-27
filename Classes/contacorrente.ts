import Conta from "./conta";
import Debito from "./debito";
import Credito from "./credito";

class ContaCorrente extends Conta {
  constructor(public numero: string, public limite: number, saldo: number = 0) {
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

export default ContaCorrente;
