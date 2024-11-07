import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-ticketbooking',
  templateUrl: './ticketbooking.component.html',
  styleUrls: ['./ticketbooking.component.css']
})
export class TicketbookingComponent {
  submitted: boolean = false;
  ticketForm: FormGroup
  showTime: string | any;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authenticationService: AuthenticationService
  ) {


    this.showTime = this.activatedRoute.snapshot.paramMap.get("time");
    this.ticketForm = new FormGroup({
      email: new FormControl("", Validators.required),
      name: new FormControl("", Validators.required),
      phone: new FormControl(123456789, Validators.required),
      noOFSeat: new FormControl(0, Validators.required),
      time: new FormControl(this.showTime),




    })
  }
  onSubmit() {
    console.log(this.ticketForm.value);
    alert("Thank you!!! Your booking is success");
    this.router.navigate(['/dashboard']);


  }

  }
