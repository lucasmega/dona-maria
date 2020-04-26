import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DateComponent } from './date/date.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { PaymentComponent } from './payment/payment.component';
import { AddressComponent } from './address/address.component';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  {
    path: 'category',
    component: CategoryComponent
  },
  {
    path: 'address',
    component: AddressComponent
  },
  {
    path: 'add-address',
    component: AddAddressComponent
  },
  {
    path: 'date',
    component: DateComponent
  },
  {
    path: 'confirmation',
    component: ConfirmationComponent
  },
  {
    path: 'payment',
    component: PaymentComponent
  },
  {
    path: 'receipt',
    component: ReceiptComponent
  },
  {
    path: 'add-payment',
    component: AddPaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule { }
