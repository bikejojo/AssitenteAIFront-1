import { AgenteModel } from "../agente";
import { TicketModel } from "./ticket.model";

export class DetalleTicketModel {
  public id: number;
  public asunto: string;
  public descripcion: string;
  public estado: string;
  public responsable: AgenteModel;
  public ticket: TicketModel;

  constructor(id?: number, asunto?: string, descripcion?: string, estado?: string, responsable?: AgenteModel, ticket?: TicketModel) {
    this.id = id || 0;
    this.asunto = asunto || '';
    this.descripcion = descripcion || '';
    this.estado = estado || '';
    this.responsable = responsable || new AgenteModel();
    this.ticket = ticket || new TicketModel();
  }
}
