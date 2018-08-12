import { Injectable, OnInit } from '@angular/core';
import { UserService } from './users/user.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService implements OnInit {
  isAuth: boolean = false;
  in: boolean = false;
  list: Array<any> = [
    { id: 1, name: 'Yuyu', age: 25 },
  ];
  constructor(private userService: UserService) {
    // console.log(this.userService.getUsers().subscribe((resp: Array<any>) => this.list = resp))
  }
  ngOnInit() {
    //console.log(this.userService.getUsers)

  }
  public authenticate(username: string, password: string): Observable<any> {
    return this.userService.getUsers();

  }
}