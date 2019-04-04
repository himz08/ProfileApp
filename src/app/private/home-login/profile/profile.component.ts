import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/common.service';
import { User } from 'src/app/register/register.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  user: User;                                     // 'User' interface is used here which is defined in register comopnent
  profileForm: FormGroup;
  userId: string;
  fullName: string;
  message: string = "your profile has been updated";
  action: string = "Dismiss";
  bookingCount: string = localStorage.getItem('bookingCount') || "0"; 
  

  constructor(private services: CommonService, public dialog: MatDialog, private router: Router, private snackBar: MatSnackBar) {
    this.initialiseForm();
  }

  ngOnInit() {

    this.services.headerChanged.emit('Profile');
    this.userId = localStorage.getItem("userId");
    this.fullName = localStorage.getItem("fullName");
    this.services.localStorageDataChanged.emit();

    this.services.getUser(this.userId)
      .subscribe((response: any) => {
        this.user = response;
        this.profileForm = new FormGroup({
          'email': new FormControl(response.email, [Validators.required, Validators.email]),
          'fullName': new FormControl(response.fullName, Validators.required),
          'phoneNumber': new FormControl(response.phoneNumber, Validators.pattern('^[0-9]+$')),
          'address': new FormControl(response.address, Validators.required),
          'medHistory': new FormControl(response.medHistory),
        });

      })
  }

  initialiseForm() {
    this.profileForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'fullName': new FormControl(null, Validators.required),
      'phoneNumber': new FormControl(null, [Validators.required, Validators.pattern('^[0-9]{1-10}')]),
      'address': new FormControl(null, Validators.required),
      'medHistory': new FormControl(null)
    })
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }


  updateProfile(): void {
    this.user.fullName = this.profileForm.value.fullName;
    this.user.firstName = this.profileForm.value.fullName.split(' ')[0];
    this.user.lastName = this.profileForm.value.fullName.split(' ')[1];
    this.user.email = this.profileForm.value.email;
    this.user.address = this.profileForm.value.address;
    this.user.medHistory = this.profileForm.value.medHistory;

    this.services.updateProfile(this.userId, this.user)
      .subscribe((response: any) => {
        localStorage.setItem('fullName', this.user.fullName);
        this.fullName = this.user.fullName;
        this.openSnackBar(this.message, this.action);
      })
  }

}