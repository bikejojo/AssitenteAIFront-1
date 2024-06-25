import {Injectable} from '@angular/core';
import {API_URL} from "../utils/contants";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SoporteModel} from "../models/soporte";

@Injectable({
  providedIn: 'root'
})
export class SoporteService {

  private readonly URL: string = API_URL + '/soporte';

  constructor(private http: HttpClient) {
  }

  public list = (): Observable<Array<SoporteModel>> =>
    this.http.get<Array<SoporteModel>>(this.URL + '/all')

  public save = (agenteModel: SoporteModel): Observable<SoporteModel> =>
    this.http.post<SoporteModel>(this.URL, agenteModel)

  public merge = (agenteModel: SoporteModel): Observable<SoporteModel> =>
    this.http.put<SoporteModel>(this.URL, agenteModel)
}
