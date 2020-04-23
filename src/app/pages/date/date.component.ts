import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
})
export class DateComponent implements OnInit {

  public isDisabled = true;
  @ViewChild('btn', {static: true}) button: ElementRef;

  constructor(private router: Router) { }

  ngOnInit() { }


  public onAddress() {
    this.router.navigateByUrl('/address');
  }

  public onConfirmation(form: any) {
    this.router.navigateByUrl('/confirmation');
  }

  public isFormValid(date: string) {
    if (date !== '') {
      this.isDisabled = false
      this.button.nativeElement.style.backgroundColor = '#ee6e73';
    } else {
      this.isDisabled = true;
    }
  }

}
