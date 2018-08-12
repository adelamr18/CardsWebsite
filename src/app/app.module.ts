  import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './home/nav/nav.component';
import { UsersComponent } from './users/users.component';
import { CardComponent } from './users/card/card.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './home/nav/login/login.component';
//import { UsersModule } from './users/users.module'; //removed for Lazy Loading
import { ApproutingModule } from './approuting.module';
import { RloginComponent } from './home/nav/rlogin/rlogin.component';
import { HomepageComponent } from './home/nav/homepage/homepage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserService } from './users/user.service';
import { HttpClientModule } from '@angular/common/http';
import { Rlogin2Component } from './home/nav/rlogin2/rlogin2.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    // AddCardComponent,
    HomepageComponent,
    LoginComponent,
    RloginComponent,
     PageNotFoundComponent,
    Rlogin2Component
    
  ],
  imports: [
    ApproutingModule,
    //UsersModule, //removed for for Lazy Loading
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
    //RouterModule.forRoot(routes)
  ],
  providers: [
    UserService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
