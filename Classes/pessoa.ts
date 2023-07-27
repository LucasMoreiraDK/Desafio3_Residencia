abstract class Pessoa {
    constructor(
      public cpf: string,
      public nome: string,
      public telefone: string
    ) {}
  
    abstract autenticar(): boolean;
  }
  
  export default Pessoa;
  