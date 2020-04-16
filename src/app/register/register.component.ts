import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from '../service/util.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private utilService: UtilService) { }

  ngOnInit() {
    this.utilService.sidenav(false);
  }

  public onLogin() {
    this.router.navigateByUrl('/login');
  }

  public onCategory() {
    this.router.navigateByUrl('/solicitation');
  }

}
