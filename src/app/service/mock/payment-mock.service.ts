import { Injectable, EventEmitter } from '@angular/core';
import { PaymentModel } from '../../model/payment.model';

@Injectable({
    providedIn: 'root'
})
export class PaymentMockService {

    public payments: PaymentModel[] = [
        {
            default: false, typeCard: 'credit-card', cardFlag: 'mastercard', cardNumber: '6261'
        },
        {
            default: true, typeCard: 'credit-card', cardFlag: 'visa', cardNumber: '8012'
        },
        {
            default: false, typeCard: 'cash-payment', cardFlag: 'cash-payment', cardNumber: ''
        }
    ];

    constructor() { }


    public getPayment(): PaymentModel[] {
        return this.payments;
    }


}
