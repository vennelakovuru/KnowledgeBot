import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
 

const apiUrl = '/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  
  email: '';
  password = '';
  showerrmsg = false;
  loginattempted = false;

  constructor(private http: HttpClient, private router: Router) {
  }


  ngOnInit(): void {

    
    
  }

  login() {
    this.loginattempted = true;
    const userInfo = {
      emailId: this.email,
      password: this.password
    };
    this.getUser(userInfo);
  }

  getUser(userInfo) {
    this.http.post('http://localhost:3000/api/login', userInfo).subscribe(data => {
        console.log('login data : ', data);
        this.router.navigateByUrl('/knowledgebot');
      },
      err => {
        console.log(err);
        console.log(err.status);
        if (err.status !== 201) {
          this.showerrmsg = true;
        }
      });
  }
}
