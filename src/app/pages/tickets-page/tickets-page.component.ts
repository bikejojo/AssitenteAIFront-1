import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TicketModel } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'page-tickets',
  templateUrl: './tickets-page.component.html',
  styleUrls: ['./tickets-page.component.scss']
})
export class TicketsPageComponent implements OnInit, AfterViewInit {

  public tickets: TicketModel[] = [];

  constructor(private ticketService: TicketService,
    private changeDetectorService: ChangeDetectorRef) {
  }

  ngAfterViewInit(): void {
    this.changeDetectorService.detectChanges();
  }

  ngOnInit(): void {
    this.loadTickets();
  }

  loadTickets() {
    this.ticketService.list().subscribe({
      next: (response: Array<TicketModel>) => {
        this.tickets = response;
      }
    })
  }

}
