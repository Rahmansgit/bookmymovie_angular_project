import { Component } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {
  bntStyle!: string;

    submit() {
    this.bntStyle = 'btn-change';

  }
}
