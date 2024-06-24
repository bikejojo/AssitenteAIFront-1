import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {API_URL} from '../utils/contants';
import {EmpresaModel} from '../models/empresa';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private readonly URL: string = API_URL + '/empresa';

  constructor(private http: HttpClient) {
  }

  public list = (): Observable<Array<EmpresaModel>> =>
    this.http.get<Array<EmpresaModel>>(this.URL + '/all')

  public save = (empresa: EmpresaModel): Observable<EmpresaModel> =>
    this.http.post<EmpresaModel>(this.URL, empresa)

  public merge = (empresa: EmpresaModel): Observable<EmpresaModel> =>
    this.http.put<EmpresaModel>(this.URL, empresa)
}
