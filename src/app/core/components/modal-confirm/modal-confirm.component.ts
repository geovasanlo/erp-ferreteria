import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatosConfirmacion } from '../../modelos/datos-confirmacion';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss']
})
export class ModalConfirmComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DatosConfirmacion
  ) {}

  public terminar(confirmado: boolean): void {
    this.dialogRef.close(confirmado);
  }

  ngOnInit(): void {
  }

}
