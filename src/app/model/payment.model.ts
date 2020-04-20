export class PaymentModel {
    public default: boolean;
    public typeCard: string;
    public cardFlag: string;
    public cardNumber: string;

    constructor() {
        this.default = false;
        this.typeCard = '';
        this.cardFlag = 'visa';
        this.cardNumber = '';
    }
}
