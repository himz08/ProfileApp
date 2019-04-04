import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './home-login/profile/profile.component';
import { HeaderComponent } from './home-login/header/header.component';
import { MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule, MatCardModule, MatGridListModule, MatInputModule, MatTabsModule, MatDividerModule, MatListModule, MatDialogModule, MatBadgeModule, MatExpansionModule, MatSnackBarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FaqComponent } from './home-login/faq/faq.component';
import { HomeLoginComponent } from './home-login/home-login.component';
import { AppRoutingModule } from '../app-routing.module';
import { BookingComponent } from './home-login/booking/booking.component';



@NgModule({
  declarations: [BookingComponent, ProfileComponent, HeaderComponent, FaqComponent, HomeLoginComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatTabsModule,
    MatDividerModule,
    MatListModule,
    MatDialogModule,
    MatBadgeModule,
    MatExpansionModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  exports: [
    BookingComponent, 
    ProfileComponent,
    FaqComponent,
    HomeLoginComponent

  ]
})
export class PrivateModule { }
