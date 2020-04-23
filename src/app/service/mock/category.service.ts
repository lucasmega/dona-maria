import { Injectable, EventEmitter } from '@angular/core';
import { CategoryModel } from '../../model/category.model';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    public categories: CategoryModel[] = [
        {
            value: '0',
            payment: 120.00,
            viewValue: 'Faxineira'
        },
        {
            value: '1',
            payment: 120.00,
            viewValue: 'Cozinheira'
        }, {
            value: '2',
            payment: 120.00,
            viewValue: 'Lavadeira'
        },
        {
            value: '3',
            payment: 150.00,
            viewValue: 'Diarista'
        }
    ]

    constructor() { }

    public getCategories(): CategoryModel[] {
        return this.categories;
    }

}
