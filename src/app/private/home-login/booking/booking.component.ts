import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';


export interface Booking {                            // Common interface for bookings
  id: number,
  address: string,
  dateTime: number,
  doctorName: string,
  patientName: string,
  status: string
}

export interface Bookings extends Array<Booking> { }  // array of type booking


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {     // required variables are defined here
  userId: string;
  bookings: Bookings;
  upcomingBookings: Bookings = [];
  pastBookings: Bookings = [];
  bookingCount: string;
  fullName: string;

  constructor(private router: Router, private services: CommonService) {

  }


  ngOnInit() {
    this.services.headerChanged.emit('My Bookings');    // event emitter to change the heading
    this.userId = localStorage.getItem("userId")
    this.fullName = localStorage.getItem("fullName");
    this.fetchBookings()                                //everytime this root is loaded it will fetch the bookings
  }

  fetchBookings() {

    this.services.getBookings()                         // function to fetch the bookings
      .subscribe((response: Bookings) => {
        this.bookings = response;

        localStorage.setItem('bookingCount', this.bookings.length.toString());
        console.log(localStorage.getItem('bookingCount'));
        this.bookingCount = this.bookings.length.toString();
        this.services.localStorageDataChanged.emit();   // emitter to inform the navabr about booking count
        this.bookings.forEach(booking => {
          if (booking.dateTime > (new Date).getTime())  // sorting of bookings acc to time
            this.upcomingBookings.push(booking)
          else
            this.pastBookings.push(booking)
        });

      })

  }

}
