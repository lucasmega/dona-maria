import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddressComponent } from './address/address.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { SolicitationComponent } from './solicitation/solicitation.component';

const routes: Routes = [
  {
    path: 'solicitation',
    component: SolicitationComponent
  },
  {
    path: 'address',
    component: AddressComponent
  },
  {
    path: 'add-address',
    component: AddAddressComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule { }
