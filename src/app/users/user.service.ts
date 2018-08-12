import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  baseUrl2='';
  baseUrl = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) {

  }
  getUsers() {
    //console.log(this.httpClient.get(`${this.baseUrl}/Users?password`));
    return this.httpClient.get(`${this.baseUrl}/Users`);
  }

  deleteUser(event) {    
    console.log('in delete', this.baseUrl2);
    return this.httpClient.delete(`${this.baseUrl}/Users/${event}`);
  }
  
  postUser(user) {    
   // console.log('in delete', this.baseUrl2);
    return this.httpClient.post(`${this.baseUrl}/Users`, user);
  }

  updateUser(user){
    //console.log("asasasasasasashaddhdhdhdhd");
    return this.httpClient.put(`${this.baseUrl}/Users/${user.id}`, user);
  }

}
