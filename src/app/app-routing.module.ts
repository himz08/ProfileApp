import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeLoginComponent } from './private/home-login/home-login.component';
import { AuthGuard } from './auth.guard';
import { BookingComponent } from './private/home-login/booking/booking.component';
import { FaqComponent } from './private/home-login/faq/faq.component';
import { ProfileComponent } from './private/home-login/profile/profile.component';

// const routes: Routes = [];

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
 
  {path: 'homeLogin' , component : HomeLoginComponent, canActivate: [AuthGuard] , children: [
    { path: 'bookings', component: BookingComponent },
    { path: 'faq', component: FaqComponent},
    { path: 'profile', component: ProfileComponent}
   ]},
  
  { path: '**', component: HomeComponent }
]


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
