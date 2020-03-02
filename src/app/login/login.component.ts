import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
const apiUrl = '/api';

@Component ({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  private email: any;
  register: any;
  http: any;

  constructor() {
  }
  username = '';
  password = '';
  registerAttempted: boolean = false;

  ngOnInit(): void {
  }

  login(username, password) {
    console.log(username.value);
    console.log(password.value);
    this.registerAttempted = true;
    const UserInfo = {
      'emailId' : this.username,
      'password' : this.password }
      this.addUser(UserInfo);
    }
addUser (UserInfo) {
  this.http.post('http://localhost:3000/api/login', UserInfo ).subscribe( data => {
    console.log('register data : ' , data);
  });
}
}