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
    this.productos$ = this.productosService.productos$;
  }

  clickEliminar(producto: Producto) {
    this.productosService.eliminarProducto(producto);
  }

  agregarProducto() {
    this.productosService.agregarProducto(
      {nombre: 'Apagador sencillo 2', marca: 'Estevez', imagenURL: 'https://cdn.homedepot.com.mx/productos/422373/422373-a2.jpg', descripcion: 'Cuentan con protección UV no se decolora. Chasis reforzado.', precio: 75, costo: 50}
    );
  }

}
