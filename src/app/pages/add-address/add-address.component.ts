import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss'],
})
export class AddAddressComponent implements OnInit {

  public form = new FormGroup({
    cep: new FormControl('', Validators.required),
    numero: new FormControl('', Validators.required)
  });

  constructor(private router: Router) { }

  ngOnInit() { }

  private onAddress() {
    this.router.navigateByUrl('/address');
  }

  private onSubmit(form: FormGroup) {
    console.log(form);
  }

}
