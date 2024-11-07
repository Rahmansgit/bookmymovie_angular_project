import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ViewMovieDetailComponent } from './components/view-movie-detail/view-movie-detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { EventsComponent } from './components/events/events.component';
import { TicketbookingComponent } from './components/ticketbooking/ticketbooking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ViewMovieDetailComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    TicketComponent,
    EventsComponent,
    TicketbookingComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  providers: [], // Add any services you want to provide at this module level
  bootstrap: [AppComponent] 

})
export class AppModule { }

