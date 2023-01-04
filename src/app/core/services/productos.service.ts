import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Producto } from '../modelos/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }

  public listaProductos(): Observable<Producto[]> {
    //TODO: Cambiar por una petición HTTP real
    return of([
      {nombre: 'Bulto de Cemento', marca: 'Tolteca', imagenURL: 'https://cdn.homedepot.com.mx/productos/754373/754373-z.jpg', descripcion: 'Cemento gris para construcción de 50kg', precio: 255, costo: 150},
      {nombre: 'Cinta de aislar', marca: 'Steren', imagenURL: 'https://www.steren.com.mx/media/catalog/product/cache/532829604b379f478db69368d14615cd/image/18371ce25/cinta-de-aislar.jpg', descripcion: 'Ideal para instalaciones eléctricas, adhesivo de alta calidad, gran elasticidad, resistente a temperaturas altas y humedad', precio: 15, costo: 5},
      {nombre: 'Apagador sencillo', marca: 'Estevez', imagenURL: 'https://cdn.homedepot.com.mx/productos/422373/422373-a2.jpg', descripcion: 'Cuentan con protección UV no se decolora. Chasis reforzado.', precio: 75, costo: 50}
    ]);
  }
}
