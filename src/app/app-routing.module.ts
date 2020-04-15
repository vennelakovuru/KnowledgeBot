
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Home1Component} from './home1/home1.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {ChatDialogComponent} from './chat/chat-dialog/chat-dialog.component';
import {HomeComponent} from './home/home.component';
import { from } from 'rxjs';


const routes: Routes = [
  { path: '', redirectTo: 'home1', pathMatch: 'full' },
  
  {
    path: 'home1',
    component: Home1Component
  },
  
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'knowledgebot',
    component: HomeComponent
  }
  // {
  //   path: 'chat',
  //   component: ChatDialogComponent
  // }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
