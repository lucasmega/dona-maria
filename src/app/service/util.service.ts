import { Injectable, EventEmitter } from '@angular/core';

import { CategoryModel, PaymentModel } from '../model/export';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  public emitSidenav = new EventEmitter<boolean>();
  public emitPayment = new EventEmitter<PaymentModel>();

  constructor() { }

  public sidenav(isSidenav: boolean) {
    this.emitSidenav.emit(isSidenav);
  }

  public payment(payment: PaymentModel) {
    this.emitPayment.emit(payment);
  }
}
