import { Component, OnInit } from '@angular/core';
import { User } from './user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User;
  
  constructor() { }

  ngOnInit() {
    this.user={
      name:'',
      password:''
    }
  }
save(model:User, isValid:boolean){
  console.log(model, isValid);
}
}
