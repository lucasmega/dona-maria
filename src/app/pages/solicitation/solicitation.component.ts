import { Component, OnInit, ElementRef, AfterContentInit, Renderer2, ViewChild } from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms';

import { Router } from '@angular/router';
import { UtilService } from 'src/app/service/util.service';

@Component({
  selector: 'app-solicitation',
  templateUrl: './solicitation.component.html',
  styleUrls: ['./solicitation.component.scss'],
})
export class SolicitationComponent implements OnInit, AfterContentInit  {

  public isDisabled = true;
  @ViewChild('btn', {static: true}) button: ElementRef;

  public foods: any[] = [
    { value: '0', viewValue: 'Faxineira' },
    { value: '1', viewValue: 'Cozinheira' },
    { value: '2', viewValue: 'Lavadeira' },
    { value: '3', viewValue: 'Diarista' }
  ];

  constructor(private router: Router, private utilService: UtilService) { }
  
  ngOnInit() {
    this.utilService.sidenav(true);
  }

  ngAfterContentInit(): void {
    this.button.nativeElement.style.backgroundColor = '#c4c4c4';
  }

  public onAddress() {
    this.router.navigateByUrl('/address');
  }

  public onChange(category: string) {
    if (category) {
      this.isDisabled = false;
      this.button.nativeElement.style.backgroundColor = '#ee6e73';
    }
  }

  

}
