import Pessoa from "./pessoa";

class Funcionario extends Pessoa {
  constructor(
    cpf: string,
    nome: string,
    telefone: string,
    public salario: number
  ) {
    super(cpf, nome, telefone);
  }

  autenticar(): boolean {
    return true;
  }
}

export default Funcionario;
