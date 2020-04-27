import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
const apiUrl = '/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public email: any;
  public password: string;
  public repeatPassword: any;

  constructor(private router: Router, private http: HttpClient) {
  }

  registerAttempted = false;
  registerSuccess = false;

  ngOnInit() {
  }

  register() {
    this.registerAttempted = true;
    const userInfo = {
      emailId: this.email,
      password: this.password,
    };
    this.addUser(userInfo);
  }

  addUser(userInfo) {
    console.log(userInfo);
    this.http.post('http://localhost:3000/api/register', userInfo).subscribe(data => {
      console.log('register data : ', data);
      this.registerSuccess = true;
    });
  }

}