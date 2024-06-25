import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {EmpleadoModel} from 'src/app/models/empleado';
import {EmpresaService} from "../../services/empresa.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {EmpleadoService} from "../../services/empleado.service";

@Component({
  selector: 'page-empleados',
  templateUrl: './empleados-page.component.html',
  styleUrls: ['./empleados-page.component.scss']
})
export class EmpleadosPageComponent implements OnInit, AfterViewInit {
  public empleados: Array<EmpleadoModel>;

  constructor(private empleadoService: EmpleadoService,
              private changeDetectorService: ChangeDetectorRef,
              private modalService: NgbModal) {
    this.empleados = [];
  }

  ngAfterViewInit(): void {
    this.loadEmpleados();
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onClickShowDialogPersona() {

  }

  private loadEmpleados() {
    // this.empleadoService.
  }
}
