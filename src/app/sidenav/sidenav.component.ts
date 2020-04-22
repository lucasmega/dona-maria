import { Component, OnInit } from '@angular/core';
import { SideNavModel } from '../model/export';

import { SidenavService } from '../service/mock/sidenav.service';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {

  public showFiller = false;
  public items: SideNavModel[] = [];

  constructor(private sidenavService: SidenavService) {
    this.items = this.sidenavService.getItems();
  }

  ngOnInit() { }

  public openNav() {
    document.getElementById('mySidenav').style.width = '100%';
  }

  public closeNav() {
    document.getElementById('mySidenav').style.width = '0';
  }

  public openPage() { }

}
