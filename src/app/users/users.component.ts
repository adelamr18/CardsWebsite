//Edit btn, text box initially = list.name;
//
import { Component } from '@angular/core';
import { UserService } from './user.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  max = 0;
  user2 = {};
  list: Array<any> = [
    { id: 1, name: 'Yuyu', age: 25 },
    { id: 2, name: 'Hania', age: 23 },
    { id: 3, name: 'Adoula eltafeh', age: 24 },
    { id: 4, name: 'Matar', age: 22 },
  ]
  public myEvent = 0;

  constructor(private usersService: UserService) {

  }
  ngOnInit() {
    this.usersService.getUsers().subscribe(
      (resp: Array<any>) => this.list = resp
    );

    //delete=>get
    //post
  }

  deleteBtnUSERS(event) {
    // console.log(rightBtn);
    this.usersService.deleteUser(event).subscribe(
      resp => this.usersService.getUsers().subscribe(
        (resp: Array<any>) => this.list = resp
      ));
    //   this.list = this.list.filter(function (element) {
    //     return element.id !== event;
    //   });
  }



  saveBtnUSERS(event) {
    console.log("okkk")
    // console.log(this.userName)
    this.list.filter(function (element) {
      if (element.id === event) {
        console.log(element.id);
        // this.sendNameUSERS(newName)
        // element.name = 'Rania';
        //  element.name = this.sendNameUSERS(element.name);
        console.log(element.name)
      }
    })
    return event;
  }
  sendEventIDUSERS(event) {
    this.myEvent = event;
    console.log("myEvent1: ", this.myEvent)
    console.log("Event", event)
    return event;
  }

  sendNameUSERS(newName) {
    console.log(newName);
    //this.usersService.updateUser(newName).subscribe();
    // console.log("myEvent2: ", this.myEvent);
    this.list.filter((element) => {
      console.log(element.id)
      //  console.log("myEvent3: ", this.myEvent)
      if (element.id == this.myEvent) {
        console.log('found', element);
        console.log(element.id);
        element.name = newName;
        this.usersService.updateUser(element).subscribe(resp => console.log(resp))
      }
      return newName;
    })
  }

  addNewUser(user) {
    this.max = 0;
    this.list.forEach((e) => {
      if (e.id > this.max) {
        this.max = e.id;
      }
    });
    user.id = this.max + 1;
    this.user2 = JSON.parse(JSON.stringify(user));
    console.log(this.user2);
    //this.list.push({id:user.id, name:user.name, age: user.age});
    this.list.push(this.user2);
    console.log('ok');
    this.usersService.postUser(user).subscribe(
      resp => this.usersService.getUsers().subscribe(
        (resp: Array<any>) => this.list = resp
      ));
  }
}


