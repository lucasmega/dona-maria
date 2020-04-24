import { Injectable, EventEmitter } from '@angular/core';

import { CategoryModel, PaymentModel } from '../model/export';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  
  public emitSidenav = new EventEmitter<boolean>();
  
  public emitPayment = new BehaviorSubject(new PaymentModel());
  public paymentMessage = this.emitPayment.asObservable();

  constructor() { }

  public sidenav(isSidenav: boolean) {
    this.emitSidenav.emit(isSidenav);
  }

  public setPayment(payment: PaymentModel) {
    this.emitPayment.next(payment);
  }
}
