import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Output()
  setRoute = new EventEmitter<string>();
  @Input()
  defaultRoute;

  constructor(private authService: AuthService) {
    console.log(this.authService.in, this.authService.isAuth)
  }

  ngOnInit() {
  }
  listHome: Array<string> = [
    'homepage',
    'users',
    // 'login',
    // 'rlogin',
    //sdjlfkbdlvjszbdvf 'rlogin2'
    //'Contact'
  ];

  // route(route){
  //   this.setRoute.emit(route);
  // }
  logged(){
    return this.authService.isAuth;
  }
  logout() {
    this.authService.isAuth = false;
  }
}
