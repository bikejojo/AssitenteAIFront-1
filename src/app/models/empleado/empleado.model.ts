import { EmpresaModel } from "../empresa";

export class EmpleadoModel {
  public id: number;
  public nombre: string;
  public correo: string;
  public telefono: string;
  public empresa: EmpresaModel;

  constructor(id?: number, nombre?: string, correo?: string, telefono?: string, empresa?: EmpresaModel) {
    this.id = id || 0;
    this.nombre = nombre || '';
    this.correo = correo || '';
    this.telefono = telefono || '';
    this.empresa = empresa || new EmpresaModel();
  }
}
