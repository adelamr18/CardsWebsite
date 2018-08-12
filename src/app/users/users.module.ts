import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
//import { BrowserModule } from '@angular/platform-browser';
import { AddCardComponent } from './add-card/add-card.component';
import { UsersroutingModule } from './usersrouting.module';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UsersroutingModule,
    // BrowserModule,
    RouterModule
  ],
  declarations: [
    UsersComponent,
    CardComponent,
    AddCardComponent
  ],
  exports: [
    UsersComponent,
    CardComponent,
    AddCardComponent
  ]
})
export class UsersModule { }
