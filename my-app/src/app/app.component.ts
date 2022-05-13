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
  champs = [
    {
      name: 'zed',
      dame: 50000,
      defend: 40,
      speed: 1000,
      price:8000,
      avata: "https://cdn.tgdd.vn/2020/09/content/galaxy-slayer-zed-splash-art-lol-uhdpaper.com-4K-64-800x450.jpg"
    },
    {
      name: 'jax',
      dame: 30,
      defend: 40,
      speed: 1000,
      price:8000,
      avata: "https://phongvu.vn/lmht/wp-content/uploads/2018/08/jax-than.jpg"
    },
    {
      name: 'Yasuo',
      dame: 50000,
      defend: 40,
      speed: 1000,
      price:8000,
      avata: "https://cdngarenanow-a.akamaihd.net/webmain/static/pss/lol/items_splash/yasuo_17.jpg"
    }
  ];
  studenName = 'Hoangvm';
  studentId = 'PH13792'
  
}
