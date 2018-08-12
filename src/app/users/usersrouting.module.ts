import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {
    path: '', component: UsersComponent, canActivate: [AuthGuard]
  }
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class UsersroutingModule { }
