import { Component } from '@angular/core';
import { EmpleadoModel } from 'src/app/models/empleado';

@Component({
  selector: 'page-empleados',
  templateUrl: './empleados-page.component.html',
  styleUrls: ['./empleados-page.component.scss']
})
export class EmpleadosPageComponent {
  public empleados: Array<EmpleadoModel>;

  constructor() {
    this.empleados = [];
  }
}
