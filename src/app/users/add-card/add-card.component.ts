import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent {
  @Input() list;
  @Output() addNewUser: EventEmitter<any> = new EventEmitter<any>();
  // @Output() addAge: EventEmitter<any> = new EventEmitter<any>();
  // @Output() addUserNameFn: EventEmitter<any> = new EventEmitter<any>();
  userName='';
  age ;
  
  newUser = {
    id: 0, 
    name: '',
    age: 0
   
  }

  addUser() {
    this.newUser.name = this.userName;
    this.newUser.age = this.age;
    console.log(this.newUser.name);
    console.log(this.newUser.age);
    //console.log(this.newUser);
    this.addNewUser.emit(this.newUser);
  }
clear(){
this.userName='';
}
}
