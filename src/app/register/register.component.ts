import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from './helpers' 

const apiUrl = '/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  public email: any;
  public password: string;
  public repeatPassword: any; 



  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient) {
  }

  registerAttempted = false;
  registerSuccess = false;

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],
            acceptTerms: [false, Validators.requiredTrue]
        }, {
            validator: MustMatch('password', 'confirmPassword')
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
