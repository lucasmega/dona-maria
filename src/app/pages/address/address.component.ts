import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {

  public foods: any[] = [
    { value: 'steak-0', viewValue: 'Faxineira' },
    { value: 'pizza-1', viewValue: 'Cozinheira' },
    { value: 'tacos-2', viewValue: 'Lavadeira' }
  ];

  constructor(private router: Router) { }

  ngOnInit() {}

  public onRegister() {
    this.router.navigateByUrl('/solicitation');
  }

}
