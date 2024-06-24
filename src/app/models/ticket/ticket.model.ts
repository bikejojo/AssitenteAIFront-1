import { AgenteModel } from "../agente";
import { EmpleadoModel } from "../empleado";
import { SoporteModel } from "../soporte";
import { DetalleTicketModel } from "./detalle.ticket.model";

export class TicketModel {
  public id: number;
  public solicitante: EmpleadoModel;
  public responsable: AgenteModel;
  public soporte: SoporteModel;
  public detalleTicket: Array<DetalleTicketModel>;
  public estado: string;
  public asunto: string;
  public descripcion: string;

  constructor(id?: number, solicitante?: EmpleadoModel, responsable?: AgenteModel, soporte?: SoporteModel, detalleTicket?: Array<DetalleTicketModel>, estado?: string, asunto?: string, descripcion?: string) {
    this.id = id || 0;
    this.solicitante = solicitante || new EmpleadoModel();
    this.responsable = responsable || new AgenteModel();
    this.soporte = soporte || new SoporteModel();
    this.detalleTicket = detalleTicket || new Array<DetalleTicketModel>();
    this.estado = estado || '';
    this.asunto = asunto || '';
    this.descripcion = descripcion || '';
  }
}
