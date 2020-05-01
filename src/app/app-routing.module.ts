import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main/main.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {HomeComponent} from './home/home.component';
import { TutorialsComponent } from './navcomponents/tutorials/tutorials.component';
import { InstallationsComponent } from './navcomponents/installations/installations.component';
import { PlaygroundComponent } from './navcomponents/playground/playground.component';
import { IdeComponent } from './navcomponents/ide/ide.component';



const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},

  {
    path: 'main',
    component: MainComponent
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
  },
  {
    path: 'tutorials',
    component: TutorialsComponent
  },
  {
    path: 'installations',
    component: InstallationsComponent
  },
  {
    path: 'playground',
    component: PlaygroundComponent
  },
  {
    path: 'ide',
    component: IdeComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
