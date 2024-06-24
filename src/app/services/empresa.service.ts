import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../utils/contants';
import { EmpresaModel } from '../models/empresa';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private readonly URL: string = API_URL + '/empresas';

  constructor(private http: HttpClient) { }

  public list = (): Observable<Array<EmpresaModel>> => {
    debugger;
    return this.http.get<Array<EmpresaModel>>(this.URL + '/all');
  }
}
