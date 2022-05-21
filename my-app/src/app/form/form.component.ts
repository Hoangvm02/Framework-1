import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  imputValues = {
    id:0,
    name: '',
    age: 0,
    email:'',
    sdt: ""
  }

  users = [
    { 
      id: 1,
      name: 'Vũ Minh Hoàng',
      age: 20,
      email: 'hoangvmph13792@gmail.com',
      sdt: "0913983123"
    }
  ]
  onSubmit(userForm: NgForm ) {
    const newUsers = this.users.map(user => user.id).sort((a: number, b: number) => b - a);

    const maxId = newUsers[0]
    // console.log(formData);

    if(userForm.value.id === 0){
      this.users.push({
        ...userForm.value,
        id: maxId + 1
      });
    } else{
      this.imputValues=({
        ...userForm.value,
        id:this.imputValues.id
      })
    }
    userForm.resetForm({
      name:'',
      age:0,
      email: '',
      sdt: ''
    })
  }
  deleteId(id: number) {
    this.users = this.users.filter(user => user.id !== id);
  }
  onEdit( user : any, id: number) {
    this.imputValues= user.find((item:any)=>item.id === id)
  }
  
}
