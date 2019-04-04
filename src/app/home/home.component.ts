import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  isLogInClicked = false;  // Variable - to decide between register page and login page 
  

  onLogInClick() {        // will show login page by chnaging the value of ngIf

    this.isLogInClicked = true;
    
  }

  onSignUpClick() {     // will show register page by chnaging the value of ngIf

    this.isLogInClicked = false;
   
  }

  ngOnInit() {

    if (localStorage.getItem('userId')) {             // redirect to profile if user is alredy logge in
      this.router.navigate(['homeLogin/profile'])
    }

  }

}
