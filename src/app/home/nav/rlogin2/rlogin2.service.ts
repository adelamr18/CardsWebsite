import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../auth.service';
import { Router } from '@angular/router';
//import { Rlogin2Service } from './rlogin2.service';



@Injectable()
export class Rlogin2Service {
  public form: FormGroup;
  invalidData = false;
  submitBtn = false;
  //in=false;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private rlogin2Service: Rlogin2Service,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submit() {
    this.submitBtn = true;
    if (this.form.valid) {
      this.authService.authenticate(
        this.form.controls.username.value, this.form.controls.password.value
      ).subscribe((resp) => {
        let foundUser = resp.filter((element) => {
          return element.name == this.form.controls.username.value && element.password == this.form.controls.password.value
        })
        if (foundUser.length) {
          this.invalidData = false;
          this.authService.isAuth = true;
          this.authService.in = true;
          console.log(this.authService.in, this.authService.isAuth)
          // if (!this.invalidData) {
          this.router.navigate(['/homepage'])
          // }
        } else {
          this.invalidData = true
        }
      });
    }
  }
}
