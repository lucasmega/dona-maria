import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.scss'],
})
export class AddPaymentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  private onPayment() {
    this.router.navigateByUrl('/payment');
  }

  public addPayment() {
    this.router.navigateByUrl('/confirmation');
  }

}
