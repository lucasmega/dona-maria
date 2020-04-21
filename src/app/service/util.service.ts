import { Injectable, EventEmitter } from '@angular/core';
import { PaymentModel } from '../model/payment.model';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  public emitSidenav = new EventEmitter<boolean>();
  public emitPayment = new EventEmitter<PaymentModel>();
  public emitCep = new EventEmitter<string>();

  constructor() { }

  public sidenav(isSidenav: boolean) {
    this.emitSidenav.emit(isSidenav);
  }

  public payment(payment: PaymentModel) {
    this.emitPayment.emit(payment);
  }

  public cep(cep: string) {
    this.emitCep.emit(cep);
  }

}
