export class AgenteModel {
  public id: number;
  public tipo: string;
  public nombre: string;
  public email: string;


  constructor(id?: number, tipo?: string, nombre?: string, email?: string) {
    this.id = id || 0;
    this.tipo = tipo || '';
    this.nombre = nombre || '';
    this.email = email || '';
  }
}
