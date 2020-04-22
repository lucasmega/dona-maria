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

  public adresses: Address[];

  constructor(
    private router: Router,
    private addressService: AddressMockService
  ) { }

  ngOnInit() {
    this.adresses = [];
    this.getAddress(sessionStorage.getItem('cep') ? sessionStorage.getItem('cep') : '09941070');
  }

  ngOnDestroy(): void {
    sessionStorage.removeItem('cep');
  }

  public onRegister() {
    this.router.navigateByUrl('/solicitation');
  }

  public onAddAddress() {
    if (this.adresses.length > 0) {
      sessionStorage.setItem('address', JSON.stringify(this.adresses));
    }
    this.router.navigateByUrl('/add-address');
  }

  public onAddDate() {
    this.router.navigateByUrl('/date');
  }

  public getAddress(cep: string) {
    let address: Address[] = [];

    this.addressService.getAddress(cep).subscribe((response: Address) => {
      this.address.bairro = response.bairro;
      this.address.cep = response.cep;
      this.address.complemento = response.complemento;
      this.address.gia = response.gia;
      this.address.ibge = response.ibge;
      this.address.localidade = response.localidade;
      this.address.logradouro = response.logradouro;
      this.address.uf = response.uf;
      this.address.unidade = response.unidade;
    });
    this.adresses.push(this.address);

    address = JSON.parse(sessionStorage.getItem('address'));
    address.forEach(element => {
      if (element.logradouro !== null && element.logradouro !== undefined) {
        this.adresses.push(element);
        sessionStorage.removeItem('address');
      }
    });
  }

}
