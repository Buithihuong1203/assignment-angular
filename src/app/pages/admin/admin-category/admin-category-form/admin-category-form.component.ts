import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-admin-category-form',
  templateUrl: './admin-category-form.component.html',
  styleUrls: ['./admin-category-form.component.css']
})
export class AdminCategoryFormComponent implements OnInit {
categoryForm : FormGroup; //khai báo categoryForm lấy dữ liệu từ FormGroup bên HTML
categoryId: string    //biến categoryId kiểu dl là string
  constructor(private categoryService: CategoryService,
              private router: Router,
              private activateRoute: ActivatedRoute,
              private toastr: ToastrService) {
                this.categoryForm = new FormGroup({
                  name: new FormControl('', [
                    Validators.required,
                    Validators.minLength(6),
                    Validators.maxLength(32),
                  ]),
                  status: new FormControl('', [
                    Validators.required
                  ]),
                  image: new FormControl('', [
                    Validators.required
                  ])
                })
                this.categoryId=''
              }

  ngOnInit(): void {
    this.categoryId = this.activateRoute.snapshot.params['id']
    if(this.categoryId) {
      this.categoryService.getCategory(this.categoryId).subscribe(data => {
        this.categoryForm.patchValue({
          name: data.name,
          status: data.status,
          image: data.image
        })
      })
    }
  }

  redirectToList() {
    this.router.navigateByUrl('/admin/categories')
  }
  onSubmit() {
    console.log(this.categoryForm);
    const data = this.categoryForm.value
    if(this.categoryId !== '' && this.categoryId !== undefined) {
        return  this.categoryService.updateCategory(this.categoryId, data).subscribe(data => {
          if(data) {
            this.toastr.success('Sửa sp thành công, chờ 1s để chuyển trang')
            setTimeout(() => {
              this.redirectToList()

            },1000)

          }

          })
    }
    // call api
   return this.categoryService.createCategory(data).subscribe(data => {

      if(data) {
        this.toastr.success('Thêm danh mục thành công, chờ 1s để chuyển trang')
        setTimeout(() => {
          this.redirectToList()

        },1000)

      }


    })


  }

}
