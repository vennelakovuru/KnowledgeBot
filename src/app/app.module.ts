import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ChatModule } from './chat/chat.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TutorialsComponent } from './navcomponents/tutorials/tutorials.component';
import { InstallationsComponent } from './navcomponents/installations/installations.component';
import { PlaygroundComponent } from './navcomponents/playground/playground.component';
import { IdeComponent } from './navcomponents/ide/ide.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MainComponent,
    TutorialsComponent,
    InstallationsComponent,
    PlaygroundComponent,
    IdeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChatModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
