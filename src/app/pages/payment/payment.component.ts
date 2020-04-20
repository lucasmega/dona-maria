import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {

  public payments: Payment[] = [];


  constructor(private router: Router) { }

  ngOnInit() {
    this.payments = [
      {
        cardNumber: '6261',
        typeCard: 'credit-card'
      },
      {
        cardNumber: '8012',
        typeCard: 'credit-card'
      },
      {
        cardNumber: '',
        typeCard: 'cash-payment'
      }
    ];
  }

  public onDate() {
    this.router.navigateByUrl('/confirmation');
  }

  public onAddPayment() {
    this.router.navigateByUrl('/add-payment');
  }

  public selectPayment() { }

}

export interface Payment {
  cardNumber: string;
  typeCard: string;
}
