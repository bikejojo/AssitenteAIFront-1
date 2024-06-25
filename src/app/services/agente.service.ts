import {Injectable} from '@angular/core';
import {API_URL} from "../utils/contants";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AgenteModel} from "../models/agente";

@Injectable({
  providedIn: 'root'
})
export class AgenteService {

  private readonly URL: string = API_URL + '/agenda';

  constructor(private http: HttpClient) {
  }

  public list = (): Observable<Array<AgenteModel>> =>
    this.http.get<Array<AgenteModel>>(this.URL + '/all')

  public save = (agenteModel: AgenteModel): Observable<AgenteModel> =>
    this.http.post<AgenteModel>(this.URL, agenteModel)

  public merge = (agenteModel: AgenteModel): Observable<AgenteModel> =>
    this.http.put<AgenteModel>(this.URL, agenteModel)
}
