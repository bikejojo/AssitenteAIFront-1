import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AgenteModel} from "../../models/agente";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-agente-dialog',
  templateUrl: './agente-dialog.component.html',
  styleUrls: ['./agente-dialog.component.scss']
})
export class AgenteDialogComponent {
  @Input() public agente: AgenteModel;
  @Output() public saveEmmiter: EventEmitter<AgenteModel>


  constructor(private modalService: NgbModal) {
    this.agente = new AgenteModel();
    this.saveEmmiter = new EventEmitter();
  }

  onDimiss() {
    this.modalService.dismissAll('cancel click');
  }

  onClose() {
    this.modalService.dismissAll('Ok click');
  }

  onSubmitEmpresa() {
    this.saveEmmiter.emit(this.agente);
    this.onClose();
  }
}
