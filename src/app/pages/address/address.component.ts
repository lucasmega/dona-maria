import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {

  public adresses: string[] = [
    'R. Madre Ana Justina, 03, Jd. Shangri-lá',
    'R. França, 45, Taboão',
    'R. Amador Bueno, 474, Santo Amaro',
  ];

  constructor(private router: Router) { }

  ngOnInit() { }

  public onRegister() {
    this.router.navigateByUrl('/solicitation');
  }

  public onAddAddress() {
    this.router.navigateByUrl('/add-address');
  }

}
