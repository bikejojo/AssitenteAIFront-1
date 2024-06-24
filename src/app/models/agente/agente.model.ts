export class AgenteModel {
  public id: number;
  public tipo: string;

  constructor(id?: number, tipo?: string) {
    this.id = id || 0;
    this.tipo = tipo || '';
  }
}
