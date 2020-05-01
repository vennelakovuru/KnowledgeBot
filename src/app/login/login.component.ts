import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


const apiUrl = '/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  
  emailid: '';
  password = '';
  showerrmsg = false;
  loginattempted = false;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router)
   { }


  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],
            acceptTerms: [false, Validators.requiredTrue]
      
        });
    
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
}

onReset() {
    this.submitted = false;
    this.registerForm.reset();
}

  login() {
    this.loginattempted = true;
    const userInfo = {
      emailId: this.emailid,
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