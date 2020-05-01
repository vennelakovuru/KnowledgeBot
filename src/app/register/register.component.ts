import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, EmailValidator } from '@angular/forms';
import { MustMatch } from './helpers' 
import Swal from 'sweetalert2'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public emailId: '';
  public password: '';
  public repeatpassword: '';
  registerForm: FormGroup;
  submitted = false;
  private result: any;


  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
            
        }, {
            validator: MustMatch('password', 'confirmPassword')
        });
  }

get f() { return this.registerForm.controls; }


onSubmit() {
  this.submitted = true;

  if (this.registerForm.invalid) {
      return;
  }


  const userInfo = {
    emailId: this.registerForm.value.email,
    password: this.registerForm.value.password,
  };
  console.log(this.emailId);
  console.log(this.password);
  this.addUser(userInfo);
}

addUser(userInfo) {
  console.log(userInfo);
  this.http.post('http://localhost:3000/api/register', userInfo).subscribe(data => {
    console.log('register data : ', data);
        });

        Swal.fire({
          title: 'Registered Successfully',
          text: 'click on ok button to login',
          icon: 'success',
          confirmButtonText: 'ok'
        });
        this.router.navigate(['/login'])
}

}
