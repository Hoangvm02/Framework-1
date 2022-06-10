import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-layout',
  templateUrl: './client-layout.component.html',
  styleUrls: ['./client-layout.component.css']
})
export class ClientLayoutComponent implements OnInit {
  logged = JSON.parse(localStorage.getItem('loggedInUser') as string);
  constructor() { }

  ngOnInit(): void {
    
  }
  logout(){
    localStorage.removeItem('loggedInUser');
    location.reload()
  }
}
