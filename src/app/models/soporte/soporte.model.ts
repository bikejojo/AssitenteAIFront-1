import { EmpresaModel } from "../empresa";
import { ProductoModel } from "../producto";

export class SoporteModel {
  public id: number;
  public fechaInicio: string;
  public estado: boolean;
  public fechaFin: string;
  public producto: ProductoModel;
  public empresa: EmpresaModel;

  constructor(id?: number, fechaInicio?: string, estado?: boolean, fechaFin?: string, producto?: ProductoModel, empresa?: EmpresaModel) {
    this.id = id || 0;
    this.fechaInicio = fechaInicio || new Date().toString();
    this.estado = estado || false;
    this.fechaFin = fechaFin || new Date().toString();
    this.producto = producto || new ProductoModel();
    this.empresa = empresa || new EmpresaModel();
  }
}
