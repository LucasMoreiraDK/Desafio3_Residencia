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
  
  export default Endereco;
  