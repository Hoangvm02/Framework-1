import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class UserFormComponent implements OnInit {
  @Input() inputValues: any
  @Output() handleSubmit : EventEmitter<any>;

  constructor() {
    this.handleSubmit = new EventEmitter();

   }

  ngOnInit(): void {
  }
  onSubmit(userForm: NgForm ) {
    console.log(userForm.value);
    this.handleSubmit.emit(userForm.value);

    userForm.resetForm({
      name: '',
      age: 0,
      email: '',
      sdt: "",
    })
  }

}
