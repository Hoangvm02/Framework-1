import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-lognin',
  templateUrl: './lognin.component.html',
  styleUrls: ['./lognin.component.css']
})
export class LogninComponent implements OnInit {

    loginForm: FormGroup
  constructor(
    private authService: AuthService,
    private router: Router
  ) { 
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.email),
      password: new FormControl('')
    })
  }

  ngOnInit(): void {
  }
  onSubmit(){
    //1: Nhận dữ liệu từ form và call API login
    // console.log("huy");
    
    this.authService.login(this.loginForm.value).subscribe(data => {
      // 2: lưu thông tin user vào loacalSrage: setItem(tên key luw váo ls, dữ liệu string)
      localStorage.setItem('loggedInUser', JSON.stringify(data));
      // loacalStorage.getItem('loggedInUser')
      this.router.navigateByUrl('/')
    })
  

  }
}
