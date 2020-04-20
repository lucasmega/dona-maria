import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss'],
})
export class ReceiptComponent implements OnInit {

  @ViewChild('mepPartner', { static: true }) mepPartner: MatExpansionPanel;
  @ViewChild('mepReceipt', { static: true }) mepReceipt: MatExpansionPanel;

  constructor(private router: Router) { }

  ngOnInit() {
    this.mepPartner.expanded = true;
    this.mepReceipt.expanded = false;
  }

  public onConclude() {
    this.router.navigateByUrl('/solicitation');
  }

  public toogleExpasionReceipt(expanded: boolean) {
    expanded ? this.mepReceipt.expanded = true : this.mepReceipt.expanded = false;
    expanded ? this.mepPartner.expanded = false : this.mepPartner.expanded = true;
  }

  public toogleExpasionPartner(expanded: boolean) {
    expanded ? this.mepPartner.expanded = true : this.mepPartner.expanded = false;
    expanded ? this.mepReceipt.expanded = false : this.mepReceipt.expanded = true;
  }

}
