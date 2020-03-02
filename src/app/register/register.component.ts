import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
const apiUrl = '/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public email: any;
  public password: string;
  public repeatPassword : any;
  public rememberMe: boolean;
  public error: string;
  http: any;

  constructor(public router: Router) { }
  registerAttempted: boolean = false;

  ngOnInit() {
  }
  register(email, password,repeatPassword) {
    console.log(email.value);
    console.log(password.value);
    this.registerAttempted = true;
    const UserInfo = {
      'emailId' : this.email,
      'password' : this.password,
      'confirmpassword':this.repeatPassword
     }
      this.addUser(UserInfo);
    }
    addUser (UserInfo) {
      this.http.post('http://localhost:3000/api/login', UserInfo ).subscribe( data => {
        console.log('register data : ' , data);
      });

}
}
