import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of, take, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Producto } from '../modelos/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  public productos$: Observable<Producto[]>;
  private productos = new BehaviorSubject<Producto[]>([]);

  constructor(
    private httpClient: HttpClient
  ) {
    this.productos$ = this.productos.asObservable();
    this.getProductosFromAPI().subscribe(prod => {
      this.productos.next(prod);
    });
  }

  eliminarProducto(producto: Producto) {
    this.httpClient.delete(`${environment.baseURL}productos/${producto.id}`).subscribe(_ => {
      let nuevaLista = this.productos.getValue().filter( p => p.id !== producto.id);
      this.productos.next(nuevaLista);
    });
  }

  agregarProducto(producto: Producto) {
    this.httpClient.post(`${environment.baseURL}productos`, producto).subscribe({
      next: _ => {
        let nuevaLista = this.productos.getValue();
        nuevaLista.push(producto);
        this.productos.next(nuevaLista);
      },
      error: _ => {
        alert('Error!!');
      }
    });
  }

  getProductosFromAPI(): Observable<Producto[]> {
    /*return of([
      {nombre: 'Bulto de Cemento', marca: 'Tolteca', imagenURL: 'https://cdn.homedepot.com.mx/productos/754373/754373-z.jpg', descripcion: 'Cemento gris para construcción de 50kg', precio: 255, costo: 150},
      {nombre: 'Cinta de aislar', marca: 'Steren', imagenURL: 'https://www.steren.com.mx/media/catalog/product/cache/532829604b379f478db69368d14615cd/image/18371ce25/cinta-de-aislar.jpg', descripcion: 'Ideal para instalaciones eléctricas, adhesivo de alta calidad, gran elasticidad, resistente a temperaturas altas y humedad', precio: 15, costo: 5},
      {nombre: 'Apagador sencillo', marca: 'Estevez', imagenURL: 'https://cdn.homedepot.com.mx/productos/422373/422373-a2.jpg', descripcion: 'Cuentan con protección UV no se decolora. Chasis reforzado.', precio: 75, costo: 50}
    ]);*/
    return this.httpClient.get<Producto[]>(`${environment.baseURL}productos`, {
      headers : new HttpHeaders ({
        'content-type' : 'application/json'
      })
      }
    ).pipe(catchError(err => throwError(() => new Error('Error!'))));
  }

  editarProducto(producto: Producto): void {
    this.httpClient.put(`${environment.baseURL}productos/${producto.id}`, producto).subscribe(_ => {
      let nuevaLista = this.productos.getValue().map(p => p.id === producto.id ? producto : p);
      this.productos.next(nuevaLista);
    });
  }

}
