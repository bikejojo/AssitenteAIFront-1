import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmpresaModel } from 'src/app/models/empresa';

@Component({
  selector: 'app-empresa-dialog',
  templateUrl: './empresa-dialog.component.html',
  styleUrls: ['./empresa-dialog.component.scss']
})
export class EmpresaDialogComponent {

  @Input() public empresa: EmpresaModel;
  @Output() public saveEmmiter: EventEmitter<EmpresaModel>

  constructor(private modalService: NgbModal) {
    this.empresa = new EmpresaModel();
    this.saveEmmiter = new EventEmitter();
  }

  onDimiss() {
    this.modalService.dismissAll('cancel click');
  }

  onClose() {
    this.modalService.dismissAll('Ok click');
  }

  onSubmitEmpresa() {
    debugger;
    this.saveEmmiter.emit(this.empresa);
    this.onClose();
  }
}
