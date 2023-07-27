import Conta from "./conta";
import Debito from "./debito";
import Credito from "./credito";

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

export default ContaPoupanca;
