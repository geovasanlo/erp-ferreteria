import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoCardComponent } from './componentes/producto-card/producto-card.component';
import { AngularMaterialModule } from './modules/angular-material.module';



@NgModule({
  declarations: [
    ProductoCardComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    ProductoCardComponent
  ]
})
export class SharedModule { }
