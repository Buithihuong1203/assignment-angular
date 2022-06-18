import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { Category } from 'src/app/types/Category';

@Component({
  selector: 'app-admin-category-detail',
  templateUrl: './admin-category-detail.component.html',
  styleUrls: ['./admin-category-detail.component.css']
})
export class AdminCategoryDetailComponent implements OnInit {
category: Category
  constructor(private categoryService: CategoryService,
    private activateRoute: ActivatedRoute) {
      this.category={
        _id:'',
        name:'',
        status: 0,
        image: ''
      }
     }


  ngOnInit(): void {
    const idFromUrl = this.activateRoute.snapshot.params['id']
    this.categoryService.getCategory(idFromUrl).subscribe(data => {
      console.log(data);

      this.category = data

    })
  }

}
