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
      avata: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlNqDRXuh2gMzS77P4GLRbaq7_KuT2-fMHlXojTkVW5mNdNE3sWvPolZhXMFN3KjGu2nI&usqp=CAU"
    },
    {
      name: 'Yasuo',
      dame: 50000,
      defend: 40,
      speed: 1000,
      price:3000,
      avata: "https://cdngarenanow-a.akamaihd.net/webmain/static/pss/lol/items_splash/yasuo_17.jpg"
    }
  ];
  studenName = 'Hoangvm';
  studentId = 'PH13792'
  
  showStatus = true;
  onClickBtn(){
    console.log("Btn clicked!");
    this.showStatus = !this.showStatus
  }

  onInput(event: any, inputName: String){
    console.log(inputName,event.target.value);
    
  }
  
  inputValue = {
    name: '',
    avata: '',
    speed: '',
    price: '',
    dame: '',
    defend:''
  }
  OnInput(event: any, key: 'name' | 'avata'|'speed'|'price'|'dame'|'defend'){
    this.inputValue[key] = event.target.value;
  }

  // OnInputName(event: any){
  //   this.inputValue['name'] = event.target.value;
    
  // }
  // OnInputAvatar(event: any){
  // this.inputValue['avatar'] = event.target.value;
    
  // }
  onClick(){
    console.log("Gía trị obj các ô input", this.inputValue);

    this.champs.push({
      ...this.inputValue,
      dame: +this.inputValue.dame,
      defend: +this.inputValue.defend,
      price: +this.inputValue.price,
      speed: +this.inputValue.speed
    });

    this.inputValue = {
      name: '',
      avata: '',
      dame: '',
      defend: '',
      speed: '',
      price:''
    }
  }
}
