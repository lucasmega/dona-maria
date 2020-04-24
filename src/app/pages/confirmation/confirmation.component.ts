import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PaymentModel } from '../../model/payment.model';

import { UtilService } from '../../service/export';
import { CategoryModel } from 'src/app/model/export';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationComponent implements OnInit {

  public payment = new PaymentModel();
  public category = new CategoryModel()

  constructor(private router: Router, private utilService: UtilService) { }

  ngOnInit() {
    this.utilService.emitPayment.subscribe((payment: PaymentModel) => this.payment);
    this.category = JSON.parse(sessionStorage.getItem('category'));
    console.log(typeof this.category.payment);

  }

  public onDate() {
    this.router.navigateByUrl('/date');
  }

  public onPayment() {
    this.router.navigateByUrl('/payment');
  }

  public onReceipt() {
    this.router.navigateByUrl('/receipt');
  }

}
