import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { AddressMockService } from '../../service/export';
import { Address } from '../../model/export';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {

  public address: Address = new Address();

  public adresses: Address[] = [ ];

  constructor(private router: Router, private addressService: AddressMockService) {
    this.addressService.getAddress('04852050').subscribe((response: Address) => {
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

  ngOnInit() {
    console.log(this.address);
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

}
