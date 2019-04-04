import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { CommonService } from '../common.service';

export interface User {   // Common interface for users data
  id: number,
  address: string,
  firstName: string,
  lastName: string,
  email: string,
  medHistory: string,
  password: string,
  phoneNumber: string,
  fullName: string
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {

  user: User;
  signupForm: FormGroup;
  signupMsg: string = "Signup successful, Now Login"
  action: string = "Dismiss"


  constructor(private services: CommonService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {

    this.signupForm = new FormGroup({     // form setup with required validations
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required),
      'confirmPassword': new FormControl(null, Validators.required),
      'firstName': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required),
      'address': new FormControl(null, Validators.required),
      'medHistory': new FormControl(null),
      'phoneNumber': new FormControl(null, [Validators.required , Validators.pattern('^[0-9]+$')])
    })

  }

  signup() {                         //This function will get called on submition of registraton form

    this.user = {                    // All the data of the form will get saved in user variable
      // id: Math.floor((Math.random() * 100) + 1),
      id: (new Date).getTime(),      
      address: this.signupForm.value.address,
      firstName: this.signupForm.value.firstName,
      lastName: this.signupForm.value.lastName,
      email: this.signupForm.value.email,
      medHistory: this.signupForm.value.medHistory,
      password: this.signupForm.value.password,
      phoneNumber: this.signupForm.value.phoneNumber,
      fullName: this.signupForm.value.firstName + ' ' + this.signupForm.value.lastName
    };

    if (this.user.password == this.signupForm.value.confirmPassword) {
      this.services.signup(this.user)             // Will call the signup function to save the data in database file
        .subscribe((response) => {

          this.openSnackBar(this.signupMsg, this.action)
          this.router.navigate(['/home'])
        })
    }
    else {
      this.openSnackBar('Passwords don\'t match!!!', this.action)
    }
  }

  openSnackBar(message: string, action: string) {   // function to show required message/info
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
