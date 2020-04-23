export class ConfirmationModel {
    
    public date: string;
    public address: string;
    public category: string;
    public payment: number;

    constructor() { 
        this.date = '';
        this.address = '';
        this.category = '';
        this.payment = 0;
    }
}