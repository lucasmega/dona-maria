import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PaymentModel } from '../../model/payment.model';

import { UtilService } from '../../service/export';
import { CategoryModel, Address } from 'src/app/model/export';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationComponent implements OnInit {

  public date: string;
  public address = new Address();
  public payment = new PaymentModel();
  public category = new CategoryModel();

  constructor(private router: Router, private utilService: UtilService) { 
    this.utilService.emitPayment.subscribe(payment => this.payment = payment);
  }

  ngOnInit() {
    this.date = sessionStorage.getItem('date');
    this.address = JSON.parse(sessionStorage.getItem('address'));
    this.category = JSON.parse(sessionStorage.getItem('category'));
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
