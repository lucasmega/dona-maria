import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Address } from '../../model/export';

import { AddressMockService } from '../../service/export';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss'],
})
export class AddAddressComponent implements OnInit {

  public address = new Address();

  public form = new FormGroup({
    cep: new FormControl('', Validators.required),
    numero: new FormControl('', Validators.required)
  });

  constructor(private router: Router, private addressMockService: AddressMockService) { }

  ngOnInit() { }

  private onAddress() {
    this.router.navigateByUrl('/address');
  }

  private onSubmit(form: FormGroup) {
    if (this.address) {
      sessionStorage.setItem('cep', this.address.cep);
      this.router.navigateByUrl('/address');
    }
  }

  public getAddress(cep: string) {
    if (cep.length === 8) {
      this.addressMockService.getAddress(cep).subscribe((address: Address) => {
        this.address.bairro = address.bairro;
        this.address.cep = this.form.value.cep;
        this.address.logradouro = address.logradouro;
      });
    }
  }

}
