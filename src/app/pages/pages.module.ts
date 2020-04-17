import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { MatNativeDateModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import { PageRoutingModule } from './pages-routing.module';

import { DateComponent } from './date/date.component';
import { WazeComponent } from '../waze/waze.component';
import { AddressComponent } from './address/address.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { SolicitationComponent } from './solicitation/solicitation.component';

@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    CommonModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    PageRoutingModule,
    MatNativeDateModule,
    MatDatepickerModule
  ],
  declarations: [
    WazeComponent,
    DateComponent,
    AddressComponent,
    AddAddressComponent,
    SolicitationComponent
  ]
})
export class PageModule {}
