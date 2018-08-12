import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './home/nav/homepage/homepage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './home/nav/login/login.component';
import { RloginComponent } from './home/nav/rlogin/rlogin.component';
import { HomeComponent } from './home/home.component';
import { Rlogin2Component } from './home/nav/rlogin2/rlogin2.component';
import { AuthGuard } from './auth.guard';
// import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', component: HomepageComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent },
  // { path: '', pathMatch: 'full', redirectTo: 'homepage' },
  { path: 'homepage', component: HomepageComponent, canActivate:[AuthGuard] },//Dashboard
  { path: 'users', loadChildren: './users/users.module#UsersModule' },
  // { path: 'login', component: LoginComponent },
  // {path:'rlogin', component:RloginComponent},
  { path: 'rlogin2', component: Rlogin2Component },
  { path: '**', component: PageNotFoundComponent }

];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    // HomepageComponent,
    // PageNotFoundComponent,
  ]
})
export class ApproutingModule { }
