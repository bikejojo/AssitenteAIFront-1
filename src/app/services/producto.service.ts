import {Injectable} from '@angular/core';
import {API_URL} from "../utils/contants";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductoModel} from "../models/producto";

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private readonly URL: string = API_URL + '/producto';

  constructor(private http: HttpClient) {
  }

  public list = (): Observable<Array<ProductoModel>> =>
    this.http.get<Array<ProductoModel>>(this.URL + '/all')

  public save = (producto: ProductoModel): Observable<ProductoModel> =>
    this.http.post<ProductoModel>(this.URL, producto)

  public merge = (productoModel: ProductoModel): Observable<ProductoModel> =>
    this.http.put<ProductoModel>(this.URL, productoModel)
}
