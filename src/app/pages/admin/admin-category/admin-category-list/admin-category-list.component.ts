import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/service/category.service';
import { Category } from 'src/app/types/Category';

@Component({
  selector: 'app-admin-category-list',
  templateUrl: './admin-category-list.component.html',
  styleUrls: ['./admin-category-list.component.css']
})
export class AdminCategoryListComponent implements OnInit {
categories: Category[]
  constructor(private categoryService: CategoryService,
    private toastr: ToastrService ) {
    this.categories = []
  }

  ngOnInit(): void {
    this.onGetList()
  }
  onGetList(){
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data
    })
  }

  onDelete(_id: string) {
    const comfirmDelete = confirm('Bạn có chắc chắn muốn xóa không ?')
    if(comfirmDelete && _id){
      this.categoryService.deleteCategory(_id).subscribe((data) => {
        if(data) {
          this.toastr.success('Xóa danh mục thành công')
          this.onGetList()
        }

      })
    }
  }

  onUpdateStatus(categoryId: string, newStatus: number) {
    this.categoryService.updateCategory(categoryId,{status: newStatus}).subscribe(data => {
      this.onGetList()
    })
  }

}
