export class SolicitationModel {
    public id: number;
    public page: boolean;
    public menu: string;
    public icon: string;
    public date: string;
    public address: string;
    public category: string;
    public payment: number;

    constructor() { 
        this.id = 0;
        this.page = false;
        this.menu = '';
        this.icon = '';
        this.date = '';
        this.address = '';
        this.category = '';
        this.payment = 0;
    }
}