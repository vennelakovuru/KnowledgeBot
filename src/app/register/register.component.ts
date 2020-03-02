import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
