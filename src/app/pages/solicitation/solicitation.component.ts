import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UtilService } from 'src/app/service/util.service';

@Component({
  selector: 'app-solicitation',
  templateUrl: './solicitation.component.html',
  styleUrls: ['./solicitation.component.scss'],
})
export class SolicitationComponent implements OnInit {

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

  public onAddress() {
    this.router.navigateByUrl('/address');
  }

}
