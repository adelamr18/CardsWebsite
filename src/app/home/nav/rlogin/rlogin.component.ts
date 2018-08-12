// Video: Angular Reactive Forms Tutorial (Angular 4)
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rlogin',
  templateUrl: './rlogin.component.html',
  styleUrls: ['./rlogin.component.css']
})
export class RloginComponent {

  rForm: FormGroup;
  post: any;
  description: string = '';
  name: string = '';

  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      'name': [null, Validators.required],
      'description': [null, Validators.compose([
        Validators.required, Validators.minLength(30), Validators.maxLength(500)
      ])],
      'validate': '',
    });
  }
  addPost(post) {//to post to server
    this.description = post.description;
    this.name = post.name;
  }

  ngOnInit(){

    this.rForm.get('validate').valueChanges.subscribe(
      (validate)=>{
        if(validate=='1'){
          this.rForm.get('name').setValidators([Validators.required, Validators.minLength(3)])
        }
        else{
          this.rForm.get('name').setValidators([Validators.required])

        }
        this.rForm.get('name').updateValueAndValidity();
      }
    )
  }
}
