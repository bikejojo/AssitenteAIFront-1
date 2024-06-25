import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {TicketModel} from 'src/app/models/ticket';
import {TicketService} from 'src/app/services/ticket.service';
import {Router} from "@angular/router";

@Component({
  selector: 'page-tickets',
  templateUrl: './tickets-page.component.html',
  styleUrls: ['./tickets-page.component.scss']
})
export class TicketsPageComponent implements OnInit, AfterViewInit {

  public tickets: TicketModel[] = [];

  constructor(private ticketService: TicketService,
              private changeDetectorService: ChangeDetectorRef,
              private router: Router) {
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

  onClickRedirectTicketDetail(ticket: TicketModel) {
    this.router.navigate(['/tickets', ticket.id]);
  }
}
