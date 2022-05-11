import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// nơi định nghĩa component 
export class AppComponent {
  // định nghĩa các biến
  // các biến nhận giá trị bên file html
  title = 'my-app';
  name = 'Hoangvm';
  adress = 'Hòa bình'
  students = [
    {
      name: 'Hoangvm',
      id:'PH13792'
    },
    {
      name: 'Hoangvm2',
      id:'PH13793'
    }
  ]
  
}
