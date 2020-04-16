import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from '../service/util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private utilService: UtilService) { }

  ngOnInit() {
    this.utilService.sidenav(false);
  }

  public onRegister() {
    this.router.navigateByUrl('/register');
  }

  public onCategories() {
    this.router.navigateByUrl('/solicitation');
  }

}
