export class EmpresaModel {
  public id: number;
  public razonSocial: string;
  public nit: string;

  constructor(id?: number, razonSocial?: string, nit?: string) {
    this.id = id || 0;
    this.razonSocial = razonSocial || '';
    this.nit = nit || '';
  }
}
