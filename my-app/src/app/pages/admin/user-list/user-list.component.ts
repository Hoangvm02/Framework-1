import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/types/Auth';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  user: User;
  constructor(
    private authService: AuthService
  ) {
    this.users = []
    this.user = {
      _id: "",
      name: "",
      email: "",
      role: 0
    }
  }

  ngOnInit(): void {
    this.authService.getUsers().subscribe((data) => {
      this.users = data;
    })
  }
  onGetList() {
    this.authService.getUsers().subscribe((data) => {
      this.users = data;
    })
  }
  change(_id: string) {
    const change = confirm("Bạn có thực sự muốn thay đổi không")
    if (change) {
      this.authService.getUser(_id).subscribe(data => {
        // gan gia tri cho form, padchValue nhan day du thuoc tinh cua form
        this.user = data

        if (this.user.role == 0) {
          this.user.role = 1;
          this.authService.updateUser(_id, this.user).subscribe(data => {
            this.onGetList()
          });
        } else if (this.user.role == 1) {
          this.user.role = 0;
          this.authService.updateUser(_id, this.user).subscribe(data => {
            this.onGetList()
          });
        }
      })
    }
  }
}
