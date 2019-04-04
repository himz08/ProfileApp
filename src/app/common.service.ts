// It is the Common Service for http requests and heading change

import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bookings } from 'src/app/private/home-login/booking/booking.component';
import { User } from './register/register.component';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {
  }

  headerChanged = new EventEmitter<string>();
  localStorageDataChanged = new EventEmitter();

  getBookings() {
    return this.http.get<Bookings>(`${this.apiUrl}bookings/`)
  }

  getUser(userId: string) {
    return this.http.get<User>(`${this.apiUrl}Users/${userId}`)
  }

  login(options: object) {
    return this.http.get( this.apiUrl + 'Users', options);
  }

  signup(user: User) {
    return this.http.post(`${this.apiUrl}Users`, user)
  }

  updateProfile(userId:string ,user: User) {
    return this.http.patch(`${this.apiUrl}Users/${userId}`, user)
  }

}
