export class Address {

    public cep: string;
    public logradouro: string;
    public bairro: string;
    public complemento: string;
    public localidade: string;
    public uf: string;
    public unidade: string;
    public ibge: string;
    public gia: string;
    public numero: string;

    constructor() {
        this.cep = '';
        this.logradouro = '';
        this.bairro = '';
        this.complemento = '';
        this.localidade = '';
        this.uf = '';
        this.unidade = '';
        this.ibge = '';
        this.gia = '';
        this.numero = '03';
    }
}
