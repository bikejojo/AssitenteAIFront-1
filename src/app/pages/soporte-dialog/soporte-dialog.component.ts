import {AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SoporteModel} from "../../models/soporte";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ProductoService} from "../../services/producto.service";
import {EmpresaService} from "../../services/empresa.service";
import {EmpresaModel} from "../../models/empresa";
import {ProductoModel} from "../../models/producto";

@Component({
  selector: 'app-soporte-dialog',
  templateUrl: './soporte-dialog.component.html',
  styleUrls: ['./soporte-dialog.component.scss']
})
export class SoporteDialogComponent implements OnInit, AfterViewInit {
  @Input() public soporte: SoporteModel;
  @Output() public saveEmmiter: EventEmitter<SoporteModel>

  public empresas: EmpresaModel[] = [];
  public productos: ProductoModel[] = [];

  constructor(private modalService: NgbModal,
              private productoService: ProductoService,
              private empresaService: EmpresaService,
              private changeDdetector: ChangeDetectorRef) {
    this.soporte = new SoporteModel();
    this.saveEmmiter = new EventEmitter();
    this.loadEmpresas();
    this.loadProductos();
  }

  ngAfterViewInit(): void {
    this.changeDdetector.detectChanges();
  }

  ngOnInit(): void {
  }

  onDimiss() {
    this.modalService.dismissAll('cancel click');
  }

  onClose() {
    this.modalService.dismissAll('Ok click');
  }

  onSubmitSoporte() {
    debugger;
    this.soporte.producto = this.productos.filter(p => p.id === Number(this.soporte.producto))[0];
    this.soporte.empresa = this.empresas.filter(e => e.id === Number(this.soporte.empresa))[0];
    this.saveEmmiter.emit(this.soporte);
    this.onClose();
  }

  private loadEmpresas() {
    this.empresaService.list().subscribe({
      next: (response: EmpresaModel[]) => {
        debugger;
        this.empresas = response;
      }
    })
  }

  private loadProductos() {
    this.productoService.list().subscribe({
      next: (response: ProductoModel[]) => {
        this.productos = response;
      }
    })
  }

  onSelectEmpresa(event: Event) {
    console.log(event);
  }
}
