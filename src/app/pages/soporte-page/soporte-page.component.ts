import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {SoporteModel} from "../../models/soporte";
import {SoporteService} from "../../services/soporte.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {SoporteDialogComponent} from "../soporte-dialog/soporte-dialog.component";

@Component({
  selector: 'app-soporte-page',
  templateUrl: './soporte-page.component.html',
  styleUrls: ['./soporte-page.component.scss']
})
export class SoportePageComponent implements OnInit, AfterViewInit {
  public soportes: SoporteModel[];


  constructor(private soporteService: SoporteService,
              private changeDetectorService: ChangeDetectorRef,
              private modalService: NgbModal) {
    this.soportes = [];
  }

  ngAfterViewInit(): void {
    this.changeDetectorService.detectChanges();
  }

  ngOnInit(): void {
    this.loadSoportes();
  }

  onClickShowDialogSoporte() {
    const modalRef = this.modalService.open(SoporteDialogComponent, {
      centered: true
    });
    modalRef.componentInstance.soporte = new SoporteModel();
    modalRef.componentInstance.saveEmmiter.subscribe((action: SoporteModel) => {
      if (action.id)
        this.saveSoporte(action);
      else
        this.mergeSoporte(action);
    });
  }

  onClickShowDialogSoporteUpdate(soporte: SoporteModel) {
    const modalRef = this.modalService.open(SoporteDialogComponent, {
      centered: true
    });
    modalRef.componentInstance.soporte = soporte;
    modalRef.componentInstance.saveEmmiter.subscribe((action: SoporteModel) => {
      this.mergeSoporte(action);
    });
  }

  private loadSoportes() {
    this.soporteService.list().subscribe({
      next: (response: SoporteModel[]) => {
        this.soportes = response;
      }
    });
  }

  private saveSoporte(soporteModel: SoporteModel) {
    this.soporteService.save(soporteModel).subscribe({
      next: (response: SoporteModel) => {
        this.loadSoportes();
      }
    });
  }

  private mergeSoporte(soporteModel: SoporteModel) {
    this.soporteService.merge(soporteModel).subscribe({
      next: (response: SoporteModel) => {
        this.loadSoportes();
      }
    });
  }
}
