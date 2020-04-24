import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { MatExpansionPanel } from '@angular/material/expansion';

import { CategoryModel, ReceiptModel, Address } from '../../model/export';
import { ReceiptService } from '../../service/mock/receipt.service';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss'],
})
export class ReceiptComponent implements OnInit {

  public date: string;
  public address = new Address();
  public receipt = new ReceiptModel();
  public category = new CategoryModel();

  @ViewChild('mepPartner', { static: true }) mepPartner: MatExpansionPanel;
  @ViewChild('mepReceipt', { static: true }) mepReceipt: MatExpansionPanel;

  public partner = new FormGroup({
    id: new FormControl({ value: '', disabled: true }),
    age: new FormControl({ value: '', disabled: true }),
    name: new FormControl({ value: '', disabled: true }),
    lastName: new FormControl({ value: '', disabled: true })
  });

  public payment = new FormGroup({
    date: new FormControl({ value: '', disabled: true }),
    value: new FormControl({ value: '', disabled: true }),
    address: new FormControl({ value: '', disabled: true }),
    service: new FormControl({ value: '', disabled: true })
  })

  constructor(private router: Router, private receiptService: ReceiptService) {
    this.receipt = this.receiptService.getPartner();
    
    this.date = sessionStorage.getItem('date');
    this.address = JSON.parse(sessionStorage.getItem('address'));
    this.category = JSON.parse(sessionStorage.getItem('category'));
  }

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
