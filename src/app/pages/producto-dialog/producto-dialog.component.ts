import {AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductoModel} from "../../models/producto";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-producto-dialog',
  templateUrl: './producto-dialog.component.html',
  styleUrls: ['./producto-dialog.component.scss']
})
export class ProductoDialogComponent implements AfterViewInit {
  @Input() public producto: ProductoModel;
  @Output() public saveEmmiter: EventEmitter<ProductoModel>

  constructor(private modalService: NgbModal,
              private detectorChange: ChangeDetectorRef) {
    this.producto = new ProductoModel();
    this.saveEmmiter = new EventEmitter();
  }

  ngAfterViewInit(): void {
    this.detectorChange.detectChanges();
  }

  onDimiss() {
    this.modalService.dismissAll('cancel click');
  }

  onClose() {
    this.modalService.dismissAll('Ok click');
  }

  onSubmitProducto() {
    this.saveEmmiter.emit(this.producto);
    this.onClose();
  }
}
