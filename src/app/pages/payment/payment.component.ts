import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PaymentModel } from '../../model/payment.model';
import { UtilService, PaymentMockService} from '../../service/export';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {

  public payments: PaymentModel[];

  constructor(private router: Router, private paymentMockService: PaymentMockService, private utilService: UtilService) {
    this.payments = this.paymentMockService.getPayment();
  }

  ngOnInit() { }

  public onDate() {
    this.router.navigateByUrl('/confirmation');
  }

  public onAddPayment() {
    this.router.navigateByUrl('/add-payment');
  }

  public selectPayment(payment: PaymentModel) {
    this.utilService.setPayment(payment);
    this.router.navigateByUrl('/confirmation');
  }

}
