import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
})
export class DateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  public onAddress() {
    this.router.navigateByUrl('/address');
  }

}
