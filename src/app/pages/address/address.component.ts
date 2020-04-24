import { Component, OnInit, OnDestroy } from '@angular/core';

import { Router } from '@angular/router';

import { AddressMockService, UtilService } from '../../service/export';
import { Address } from '../../model/export';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit, OnDestroy {

  public address: Address = new Address();

  public adresses: Address[] = [];

  constructor(
    private router: Router,
    private utilService: UtilService,
    private addressService: AddressMockService
  ) { 
    this.utilService.sidenav(true);
  }

  ngOnInit() {
    this.adresses = this.addressService.registered();
    this.getAddress(JSON.parse(sessionStorage.getItem('adresses')));
  }

  ngOnDestroy(): void { }

  public onRegister() {
    this.router.navigateByUrl('/solicitation');
  }

  public onAddAddress(address: Address) {
    this.router.navigateByUrl('/add-address');
  }

  public onAddDate(address: Address) {
    sessionStorage.setItem('address', JSON.stringify(address));
    this.router.navigateByUrl('/date');
  }

  public getAddress(address: Address) {
    address ? this.adresses.push(address): null;
    sessionStorage.removeItem('adresses');
  }
}
