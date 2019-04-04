import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  bookingCount: string;
  fullName: string;

  constructor(private router: Router , private route : ActivatedRoute , private services : CommonService) { }

  ngOnInit() {
    this.services.localStorageDataChanged.subscribe( // logic to get latest values
    () => {
      this.bookingCount = localStorage.getItem('bookingCount');  
      this.fullName = localStorage.getItem('fullName');
    }
    );
  }

  profile() {                                               // navigation function to profile page
    console.log('Redirecting to Profile');
    this.router.navigate(['homeLogin/profile']);
  }

  bookings() {                                               // navigation function to bookings page
    console.log('Redirecting to Bookings');
    this.router.navigate(['homeLogin/bookings']);
  }

  faq() {                                                     // navigation function to faq page
    console.log('Redirecting to FAQ\'s');
    this.router.navigate(['homeLogin/faq']);
  }

  logout() {                                                  // logout function - resetting the local storage
    console.log('Logout Successful!!! \n Redirecting to Login');
    localStorage.clear();
    this.router.navigate(['/home']);
  }

}
