
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { MatSelect } from '@angular/material/select';

import { ErrorStateMatcher } from '@angular/material/core';

import { CategoryModel, ErrorStateMatchers } from '../../model/export';
import { CategoryService, UtilService } from '../../service/export';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  public isPaymentValue = true;
  public categories: CategoryModel[];
  public matcher = new ErrorStateMatchers();

  @ViewChild('f', { static: true }) select: MatSelect;

  public form = new FormControl('valid', [
    Validators.required,
    Validators.pattern('[0-9]+$'),
  ]);

  constructor(private router: Router, private utilService: UtilService, private categoryService: CategoryService) {
    this.categories = categoryService.getCategories();
  }

  ngOnInit() {
    this.utilService.sidenav(true);
  }

  public onAddress(value: string) {
    this.categories.forEach((element: CategoryModel) => {
      element.value === value ? this.setSessionCategory(element) : null;
    });
    this.router.navigateByUrl('/address');
  }

  private setSessionCategory(category: CategoryModel) {
    sessionStorage.setItem('category', JSON.stringify(category));
  }
}
