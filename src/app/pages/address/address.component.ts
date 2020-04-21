import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { AddressMockService, UtilService } from '../../service/export';
import { Address } from '../../model/export';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {

  public address: Address = new Address();

  public adresses: Address[] = [ ];

  constructor(private router: Router, private addressService: AddressMockService, private utilService: UtilService) {
    if (this.utilService.emitCep.observers.length > 0) {
      this.utilService.emitCep.subscribe((cep: string) => this.getAddress(cep));
    } else {
      this.getAddress('09941070');
    }
  }

  ngOnInit() {
    this.adresses.push(this.address);
  }

  public onRegister() {
    this.router.navigateByUrl('/solicitation');
  }

  public onAddAddress() {
    this.router.navigateByUrl('/add-address');
  }

  public onAddDate() {
    this.router.navigateByUrl('/date');
  }

  public getAddress(cep: string) {
    console.log(cep);
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
  }

}
