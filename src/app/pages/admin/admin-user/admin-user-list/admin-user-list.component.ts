import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';
import { TypeLoginRequest } from 'src/app/types/Auth';

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.css']
})
export class AdminUserListComponent implements OnInit {
  users : TypeLoginRequest[];
  constructor(private userService: AuthService,
    private toastr : ToastrService) {
      this.users = []
   }

  ngOnInit(): void {
    this.onGetList()
  }
  onGetList() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data
      console.log(data);

    })
  }
  onDelete(_id: string | undefined) {
    //confirm
    // kiểm tra dữ liệu
    //cập nhật lại danh sách
    const comfirmDelete = confirm('Bạn có chắc chắn muốn xóa không ?')
    if(comfirmDelete && _id){
      this.userService.deleteUser(_id).subscribe((data) => {
        if(data) {
          this.onGetList()
        }

      })
    }
  }

}

