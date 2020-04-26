import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SideNavModel } from '../model/export';
import { SidenavService} from '../service/export';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {

  public showFiller = false;
  public items: any[] = [];

  constructor(private router: Router, private sidenavService: SidenavService) {
    this.items = this.sidenavService.getItems();
  }

  ngOnInit() { }

  public openNav() {
    sessionStorage.setItem('arrow', JSON.stringify(true))
    document.getElementById('mySidenav').style.width = '100%';
  }

  public closeNav() {
    document.getElementById('mySidenav').style.width = '0';
    this.items = this.sidenavService.getItems();
  }

  public openPage(item: SideNavModel) { 
    item.page ? this.navigateByUrl(item.menu) : this.reloadSideNav(item.menu);
  }

  public reloadSideNav(menu: string) {
    switch(menu) {
      case 'solicitation':
        this.items = this.sidenavService.getFilterRequest();
        break;
      case 'request-in-progress':
        this.items = this.sidenavService.getRequestsInProgress();
        break;
      case 'request-completed':
        this.items = this.sidenavService.getRequestsCompleted();
        break;
      case 'help':
        this.items = this.sidenavService.getHelp();
        break;
    }
  }

  public navigateByUrl(url: string) {
    url === 'payment' ? sessionStorage.setItem('arrow', JSON.stringify(false)) : null ;
    this.router.navigateByUrl(`/${url}`);
    this.closeNav();
  }

}
