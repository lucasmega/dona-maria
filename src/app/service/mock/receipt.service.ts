import { Injectable } from '@angular/core';

import { ReceiptModel } from '../../model/export';

@Injectable({
    providedIn: 'root'
})
export class ReceiptService {

    constructor() { }

    public getPartner(): ReceiptModel {
        return  {
            age: 55,
            id: "X191554",
            name: "Maria Rosa",
            lastname: "Da Silva"
        } as ReceiptModel;
    }
}
