import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss'],
})
export class AddAddressComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  private onAddress() {
    this.router.navigateByUrl('/address');
  }

}
