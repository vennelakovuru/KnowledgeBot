import { Component, OnInit } from '@angular/core';
@Component ({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  private email: any;
  register: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  login(username, password) {
    console.log(username.value);
    console.log(password.value);
  }
}
