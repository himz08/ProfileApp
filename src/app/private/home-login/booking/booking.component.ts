import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';


export interface Booking {
  id: number,
  address: string,
  dateTime: number,
  doctorName: string,
  patientName: string,
  status: string
}

export interface Bookings extends Array<Booking> { }


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  userId: string;
  bookings: Bookings;
  upcomingBookings: Bookings = [];
  pastBookings: Bookings = [];
  bookingCount: string;
  fullName: string;

  constructor(private router: Router, private services: CommonService) {

  }


  ngOnInit() {
    this.services.headerChanged.emit('My Bookings');
    this.userId = localStorage.getItem("userId")
    this.fullName = localStorage.getItem("fullName");
    this.fetchBookings()
  }

  fetchBookings() {

    this.services.getBookings()
      .subscribe((response: Bookings) => {
        this.bookings = response;

        localStorage.setItem('bookingCount', this.bookings.length.toString());
        console.log(localStorage.getItem('bookingCount'));
        this.bookingCount = this.bookings.length.toString();
        this.services.localStorageDataChanged.emit();

        this.bookings.forEach(booking => {
          if (booking.dateTime > (new Date).getTime())
            this.upcomingBookings.push(booking)
          else
            this.pastBookings.push(booking)
        });

      })

  }

}
