import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketModel } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'page-tickets-detail',
  templateUrl: './tickets-detail-page.component.html',
  styleUrls: ['./tickets-detail-page.component.scss']
})
export class TicketsDetailPageComponent implements OnInit, AfterViewInit {
  public ticket: TicketModel;

  constructor(private ticketService: TicketService,
    private changeDetectorService: ChangeDetectorRef,
    private route: ActivatedRoute) {
    this.ticket = new TicketModel();
    this.route.params.subscribe(params => {
      this.ticket.id = params['ticket_id'];
    });
  }

  ngAfterViewInit(): void {
    this.changeDetectorService.detectChanges();
  }

  ngOnInit(): void {
    this.loadTicketInfo();
  }

  loadTicketInfo() {
    this.ticketService.findById(this.ticket.id).subscribe({
      next: (response: TicketModel) => {
        this.ticket = response;
      }
    })
  }
}
