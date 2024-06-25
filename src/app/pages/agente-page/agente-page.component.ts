import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AgenteModel} from "../../models/agente";
import {AgenteService} from "../../services/agente.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AgenteDialogComponent} from "../agente-dialog/agente-dialog.component";

@Component({
  selector: 'app-agente-page',
  templateUrl: './agente-page.component.html',
  styleUrls: ['./agente-page.component.scss']
})
export class AgentePageComponent implements OnInit, AfterViewInit {
  public agentes: AgenteModel[];


  constructor(private agenteService: AgenteService,
              private changeDetectorService: ChangeDetectorRef,
              private modalService: NgbModal) {
    this.agentes = [];
  }

  ngAfterViewInit(): void {
    this.changeDetectorService.detectChanges();
  }

  ngOnInit(): void {
    this.loadAgentes();
  }

  onClickShowDialogAgente() {
    const modalRef = this.modalService.open(AgenteDialogComponent, {
      centered: true
    });
    modalRef.componentInstance.agente = new AgenteModel();
    modalRef.componentInstance.saveEmmiter.subscribe((action: AgenteModel) => {
      debugger;
      if (action.id)
        this.saveAgente(action);
      else
        this.mergeEmpresa(action);
    });
  }

  private loadAgentes() {
    this.agenteService.list().subscribe({
      next: (response: AgenteModel[]) => {
        this.agentes = response;
      }
    })
  }

  private saveAgente(agente: AgenteModel) {
    this.agenteService.save(agente).subscribe({
      next: (response: AgenteModel) => {
        this.loadAgentes();
      }
    });
  }

  private mergeEmpresa(agenteModel: AgenteModel) {
    this.agenteService.merge(agenteModel).subscribe({
      next: (response: AgenteModel) => {
        this.loadAgentes();
      }
    });
  }

  onClickShowDialogAgenteUpdate(agente: AgenteModel) {
    const modalRef = this.modalService.open(AgenteDialogComponent, {
      centered: true
    });
    modalRef.componentInstance.agente = agente;
    modalRef.componentInstance.saveEmmiter.subscribe((action: AgenteModel) => {
      this.mergeEmpresa(action);
    });
  }
}
