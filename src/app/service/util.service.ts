import { Injectable, EventEmitter } from '@angular/core';
import { PaymentModel } from '../model/payment.model';

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
    console.log(payment);
    this.emitPayment.emit(payment);
  }

}
