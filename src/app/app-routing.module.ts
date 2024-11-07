import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "viewMovie/:id", component: ViewMovieDetailComponent },
  { path: "navbar", component: NavbarComponent },
  { path: "header", component: HeaderComponent },
  { path: "footer", component: FooterComponent },
  { path: "home", component: HomeComponent },
  { path: "signup", component: SignupComponent },
  {path: "login", component: LoginComponent},
  { path: "ticketbooking/:time", component: TicketbookingComponent},
  { path: "events", component: EventsComponent },
{ path: "ticket", component: TicketComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
