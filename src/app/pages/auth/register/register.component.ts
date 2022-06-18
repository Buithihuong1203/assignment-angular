import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm : FormGroup;


  constructor(private authService : AuthService,
              private router : Router
              ) {
this.registerForm = new FormGroup({
  name: new FormControl(''),
  email: new FormControl(''),
  password : new FormControl(''),
});

               }


  ngOnInit(): void {
  }
  onSubmit() {
    const submitData = this.registerForm.value;
    this.authService.register(submitData).subscribe(data => {
      this.router.navigateByUrl('/auth/login');
    })
  }

}
