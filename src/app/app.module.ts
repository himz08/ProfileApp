import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule, MatCardModule, MatGridListModule, MatInputModule, MatTabsModule, MatDividerModule, MatListModule, MatDialogModule, MatBadgeModule, MatExpansionModule, MatSnackBarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http'
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { CommonService } from './common.service';
import { PrivateModule } from './private/private.module';
import { CanDeactivateGuard } from './private/home-login/profile/can-deactivate-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    PrivateModule,
    AppRoutingModule,
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
   
  ],
  providers: [HttpClient, AuthGuard, CommonService, CanDeactivateGuard ], 
  bootstrap: [AppComponent]
})

export class AppModule { }
