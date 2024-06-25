export class ProductoModel {
  public id: number;
  public nombre: string;


  constructor(id?: number, nombre?: string) {
    this.id = id || 0;
    this.nombre = nombre || '';
  }
}
