import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ProductoModel} from "../../models/producto";
import {ProductoService} from "../../services/producto.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ProductoDialogComponent} from "../producto-dialog/producto-dialog.component";

@Component({
  selector: 'app-producto-page',
  templateUrl: './producto-page.component.html',
  styleUrls: ['./producto-page.component.scss']
})
export class ProductoPageComponent implements OnInit, AfterViewInit {
  productos: ProductoModel[];


  constructor(private productoService: ProductoService,
              private changeDetectorService: ChangeDetectorRef,
              private modalService: NgbModal) {
    this.productos = [];
  }

  ngAfterViewInit(): void {
    this.changeDetectorService.detectChanges();
  }

  ngOnInit(): void {
    this.loadProductos();
  }

  private loadProductos() {
    this.productoService.list().subscribe({
      next: response => this.productos = response
    });
  }

  onClickShowDialogProducto() {
    const modalRef = this.modalService.open(ProductoDialogComponent, {
      centered: true
    });
    modalRef.componentInstance.producto = new ProductoModel();
    modalRef.componentInstance.saveEmmiter.subscribe((action: ProductoModel) => {
      if (action.id)
        this.saveProducto(action);
      else
        this.mergeProducto(action);
    });
  }

  onClickShowDialogProductoUpdate(producto: ProductoModel) {
    const modalRef = this.modalService.open(ProductoDialogComponent, {
      centered: true
    });
    modalRef.componentInstance.producto = producto;
    modalRef.componentInstance.saveEmmiter.subscribe((action: ProductoModel) => {
      this.mergeProducto(action);
    });
  }

  private saveProducto(productoModel: ProductoModel) {
    this.productoService.save(productoModel).subscribe({
      next: (response: ProductoModel) => {
        this.loadProductos();
      }
    });
  }

  private mergeProducto(productoModel: ProductoModel) {
    this.productoService.merge(productoModel).subscribe({
      next: (response: ProductoModel) => {
        this.loadProductos();
      }
    });
  }
}
