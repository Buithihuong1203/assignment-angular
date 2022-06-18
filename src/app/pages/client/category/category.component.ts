import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { Category } from 'src/app/types/Category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
categories: Category[]
  constructor(private categoryService: CategoryService) {
    this.categories= []
   }

  ngOnInit(): void {
    this.onGetList()
  }

  onGetList() {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data
    })
  }

}
