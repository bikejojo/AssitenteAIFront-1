import { Injectable } from '@angular/core';
import {API_URL} from "../utils/contants";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {EmpresaModel} from "../models/empresa";

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private readonly URL: string = API_URL + '/empleado';

  constructor(private http: HttpClient) {
  }

  public list = (): Observable<Array<EmpresaModel>> =>
    this.http.get<Array<EmpresaModel>>(this.URL + '/all')

  public save = (empresa: EmpresaModel): Observable<EmpresaModel> =>
    this.http.post<EmpresaModel>(this.URL, empresa)

  public merge = (empresa: EmpresaModel): Observable<EmpresaModel> =>
    this.http.put<EmpresaModel>(this.URL, empresa)
}
