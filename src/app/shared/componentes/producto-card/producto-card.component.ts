import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/core/modelos/producto';

@Component({
  selector: 'app-producto-card',
  templateUrl: './producto-card.component.html',
  styleUrls: ['./producto-card.component.scss']
})
export class ProductoCardComponent implements OnInit {

  @Input() producto: Producto;
  @Output() eliminar = new EventEmitter<Producto>();

  constructor() { }

  ngOnInit(): void {
  }

  eliminarF() {
    this.eliminar.emit(this.producto);
  }

}
