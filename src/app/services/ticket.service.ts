import { Injectable } from '@angular/core';
import { API_URL } from '../utils/contants';
import { TicketModel } from '../models/ticket';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private readonly URL: string = API_URL + '/ticket';

  constructor(private http: HttpClient) { }

  public list = (): Observable<Array<TicketModel>> =>
    this.http.get<Array<TicketModel>>(this.URL + '/all');

  public findById = (ticketId: number): Observable<TicketModel> =>
    this.http.get<TicketModel>(this.URL + '/' + ticketId);
}
