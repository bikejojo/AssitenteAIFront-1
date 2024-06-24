import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {EmpresaModel} from 'src/app/models/empresa';
import {EmpresaService} from 'src/app/services/empresa.service';
import {EmpresaDialogComponent} from '../empresa-dialog/empresa-dialog.component';

@Component({
  selector: 'page-empresa',
  templateUrl: './empresa-page.component.html',
  styleUrls: ['./empresa-page.component.scss']
})
export class EmpresaPageComponent implements OnInit, AfterViewInit {

  public empresas: Array<EmpresaModel> = [];

  constructor(private empresaService: EmpresaService,
              private changeDetectorService: ChangeDetectorRef,
              private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.loadEmpresas();
  }

  ngAfterViewInit(): void {
    this.changeDetectorService.detectChanges();
  }

  loadEmpresas() {
    this.empresaService.list().subscribe({
      next: (response: Array<EmpresaModel>) => {
        this.empresas = response;
      },
      error: err => console.log(err)
    })
  }

  onClickShowDialogEmpresa() {
    const modalRef = this.modalService.open(EmpresaDialogComponent, {
      centered: true
    });
    modalRef.componentInstance.empresa = new EmpresaModel(100, 'Club Bolivar', '548946464');
    modalRef.componentInstance.saveEmmiter.subscribe((action: EmpresaModel) => {
      if (action.id)
        this.saveEmpresa(action);
      else
        this.mergeEmpresa(action);
    })
  }

  mergeEmpresa(action: EmpresaModel) {
    this.empresaService.merge(action).subscribe({
      next: (response: EmpresaModel) => {
        this.loadEmpresas();
      },
      error: err => console.error(err)
    })
  }

  saveEmpresa(empresaModel: EmpresaModel) {
    this.empresaService.save(empresaModel).subscribe({
      next: (response: EmpresaModel) => {
        this.loadEmpresas();
      },
      error: err => console.error(err)
    })
  }
}
