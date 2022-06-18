import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
productForm: FormGroup;
productId : string
  constructor(private productService: ProductService,
    private router: Router,
    private activateRoute : ActivatedRoute,
    private toastr : ToastrService) {
      this.productForm = new FormGroup({
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(32),
          //this.onValidateNameHasProduct
        ]),
        price: new FormControl('', [
          Validators.required
        ]),
        sale_price: new FormControl('', [
          Validators.required
        ]),
        description : new FormControl('', [
          Validators.required
        ]),
        img_url : new FormControl('',[
          Validators.required
        ]),
        status: new FormControl('',[
          Validators.required
        ]
        )
      });
      this.productId =''
    }

  ngOnInit(): void {
    this.productId = this.activateRoute.snapshot.params['id'];
    if(this.productId) {
      this.productService.getProduct(this.productId).subscribe(data => {
        this.productForm.patchValue({
          name: data.name,
          price: data.price,
          sale_price : data.sale_price,
          description : data.description,
          img_url : data.img_url,
          status: data.status
        })
      })
    }

  }
  // onValidateNameHasProduct(control : AbstractControl) : ValidationErrors | null{
  //   const inputValue = control.value
  //   if(!inputValue.includes('book')){
  //     return {hasProductError: true}
  //   }
  //   return null
  // }
  redirectToList() {
    this.router.navigateByUrl('/admin/products');
  }
onSubmit() {
  const data = this.productForm.value
  if(this.productId !== '' && this.productId !== undefined) {
    return this.productService.updateProduct(this.productId, data).subscribe(data => {
      if(data) {
        this.toastr.success('Sửa thành công , chờ 2s để tự động chuyển trang')
        setTimeout(() => {
          this.redirectToList()
        }, 2000)
      }
    })
  }
  //call api

  return this.productService.createProduct(data).subscribe(data => {
    if(data){
      this.toastr.success('Thêm thành công , đợt chút')
      setTimeout(() => {
        this.redirectToList()
      },2000);
    }
  })
}

}
