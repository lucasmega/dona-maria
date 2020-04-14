import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  public activeHeaderOver: boolean;

  constructor() { }

  ngOnInit() { }

  public onScroll(event: any): void {
    const scrollTop = event.target.scrollTop;
    this.activeHeaderOver = (scrollTop > 0);
  }
}
