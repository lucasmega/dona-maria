import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { UtilService } from '../../service/export';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
})
export class DateComponent implements OnInit {

  public isDisabled = true;
  @ViewChild('btn', {static: true}) button: ElementRef;

  public form = new FormControl(null, [
    Validators.required,
  ]);

  constructor(private router: Router, private utilService: UtilService ) { 
    this.utilService.sidenav(true);
  }

  ngOnInit() { }

  public onAddress() {
    this.router.navigateByUrl('/address');
  }

  public onConfirmation(date: string) {
    sessionStorage.setItem('date', date);
    this.router.navigateByUrl('/confirmation');
  }

}
