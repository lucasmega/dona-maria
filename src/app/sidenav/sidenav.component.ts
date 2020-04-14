import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {

  public showFiller = false;

  constructor() { }

  ngOnInit() { }

  public openNav() {
    document.getElementById('mySidenav').style.width = '300px';
  }

  public closeNav() {
    document.getElementById('mySidenav').style.width = '0';
  }

}
