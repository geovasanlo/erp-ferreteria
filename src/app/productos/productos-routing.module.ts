import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosDashboardComponent } from './pages/productos-dashboard/productos-dashboard.component';
import { ProductosEditComponent } from './pages/productos-edit/productos-edit.component';
import { ProductosComponent } from './productos.component';

const routes: Routes = [
  {
    path: '',
    component: ProductosComponent,
    children: [
      {
        path: '',
        component: ProductosDashboardComponent,
        data: {
          nombre: 'Productos Dashboard'
        }
      },
      {
        path: 'nuevo',
        component: ProductosEditComponent,
        data: {
          nombre: 'Nuevo producto'
        }
      },
      {
        path: 'editar/:id',
        component: ProductosEditComponent,
        data: {
          nombre: 'Editar producto'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
