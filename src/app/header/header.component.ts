import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from '../service/util.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  public isSidenav: boolean;

  @Input() activeHeaderOver: boolean;

  constructor(private router: Router, private utilService: UtilService) { }

  ngOnInit() {
    this.utilService.emitSidenav.subscribe(flag => this.isSidenav = flag);
  }

  public onCategory() {
    this.router.navigateByUrl('category');
  }



}
