import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;                           
  loginMsg: string = "Login successful";
  loginMsgError: string = "Login Failed!!!";
  action: string = "Dismiss";

  constructor(private services: CommonService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {

    // loginForm is structured here and linked with view using binding
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]), // Validators.required will make the field required
      'password': new FormControl(null, Validators.required)
    })

  }

  login(): void {

    const options = {
      params: new HttpParams().set('email', this.loginForm.value.email).set('password', this.loginForm.value.password)
    }  // params - genrated using logged in id and pass

// in service login function is called to check database    
    this.services.login(options)
      .subscribe((response: any) => {
        if (response.length) {                                
          // this block will run if db returns somthing                                             
          localStorage.setItem('userId', response[0].id);
          localStorage.setItem('fullName', response[0].fullName);
          localStorage.setItem('bookingCount' , '0');
          // id and pass is stored in local storage
          this.openSnackBar(this.loginMsg, this.action);
          this.router.navigate(['/homeLogin/profile']);  // it will navigate to profile page
        }
        else {
          
          this.openSnackBar(this.loginMsgError, this.action);
        }

      })

  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      verticalPosition: 'top'
    });
  }

}
