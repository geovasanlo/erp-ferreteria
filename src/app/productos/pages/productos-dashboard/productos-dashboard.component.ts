import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/core/modelos/producto';
import { ProductosService } from 'src/app/core/services/productos.service';

@Component({
  selector: 'app-productos-dashboard',
  templateUrl: './productos-dashboard.component.html',
  styleUrls: ['./productos-dashboard.component.scss']
})
export class ProductosDashboardComponent implements OnInit {

  public productos$: Observable<Producto[]>;

  constructor(
    private productosService: ProductosService
  ) { }

  ngOnInit(): void {
    this.productos$ = this.productosService.listaProductos();
  }

}
