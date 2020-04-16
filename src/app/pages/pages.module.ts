import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import { PageRoutingModule } from './pages-routing.module';

import { AddressComponent } from './address/address.component';
import { WazeComponent } from '../waze/waze.component';
import { SolicitationComponent } from './solicitation/solicitation.component';

@NgModule({
  imports: [
      FormsModule,
      IonicModule,
      CommonModule,
      MatInputModule,
      MatSelectModule,
    PageRoutingModule,
  ],
  declarations: [
    WazeComponent,
    AddressComponent,
    SolicitationComponent
  ]
})
export class PageModule {}
