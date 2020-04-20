import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatNativeDateModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { PageRoutingModule } from './pages-routing.module';

import { DateComponent } from './date/date.component';
import { WazeComponent } from '../waze/waze.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { PaymentComponent } from './payment/payment.component';
import { AddressComponent } from './address/address.component';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { SolicitationComponent } from './solicitation/solicitation.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    CommonModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    PageRoutingModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  declarations: [
    WazeComponent,
    DateComponent,
    PaymentComponent,
    AddressComponent,
    ReceiptComponent,
    AddPaymentComponent,
    AddAddressComponent,
    SolicitationComponent,
    ConfirmationComponent,
  ]
})
export class PageModule {}
