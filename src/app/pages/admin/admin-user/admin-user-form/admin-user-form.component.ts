import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-admin-user-form',
  templateUrl: './admin-user-form.component.html',
  styleUrls: ['./admin-user-form.component.css']
})
export class AdminUserFormComponent implements OnInit {
userForm: FormGroup;
userId: string
  constructor(private userService: AuthService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private toastr: ToastrService) {
      this.userForm= new FormGroup({
        email: new FormControl('', [
          Validators.required
        ]),
        password: new FormControl('', [
          Validators.required
        ]),
        role: new FormControl('', [
          Validators.required
        ])

      })
      this.userId=''
     }

  ngOnInit(): void {
    this.userId = this.activateRoute.snapshot.params['_id']
    if(this.userId) {
      this.userService.getUser(this.userId).subscribe(data => {
        // cập nhật data cho form
        this.userForm.patchValue({
          email: data.email,
          password: data.password,
          role: data.role
        })
      })
    }
  }

  redirectToList() {
    this.router.navigateByUrl('/admin/users')
  }

  onSubmit(){
    const data = this.userForm.value
    if(this.userId !== '' && this.userId !== undefined ) {
      return this.userService.updateUser(this.userId, data).subscribe(data => {
        if(data) {
          this.toastr.success('Sửa thành công')
          setTimeout(() => {
            this.redirectToList()
          },2000)
        }
      })
    }
    return null
  }

}
