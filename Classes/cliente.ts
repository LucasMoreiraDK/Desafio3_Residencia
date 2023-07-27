import Endereco from "./endereco";
import Pessoa from "./pessoa";

interface IUsuario {
  autenticar(): boolean;
}

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

  autenticar(): boolean {
    return true;
  }
}

export default Cliente;
