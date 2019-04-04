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
    this.services.bookingCountUpdated.subscribe(
    () => {
      this.bookingCount = localStorage.getItem('bookingCount');
      this.fullName = localStorage.getItem('fullName');
    }
    );
  }

  profile() {
    console.log('Redirecting to Profile');
    this.router.navigate(['homeLogin/profile']);
  }

  bookings() {
    console.log('Redirecting to Bookings');
    this.router.navigate(['homeLogin/bookings']);
  }

  faq() {
    console.log('Redirecting to FAQ\'s');
    this.router.navigate(['homeLogin/faq']);
  }

  logout() {
    console.log('Logout Successful!!! \n Redirecting to Login');
    localStorage.clear();
    this.router.navigate(['/home']);
  }

}
