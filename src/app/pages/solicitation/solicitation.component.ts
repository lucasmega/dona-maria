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
    { value: 'steak-0', viewValue: 'Faxineira' },
    { value: 'pizza-1', viewValue: 'Cozinheira' },
    { value: 'tacos-2', viewValue: 'Lavadeira' }
  ];

  constructor(private router: Router, private utilService: UtilService) { }

  ngOnInit() {
    this.utilService.sidenav(true);
  }

  public onAddress() {
    this.router.navigateByUrl('/address');
  }

}
