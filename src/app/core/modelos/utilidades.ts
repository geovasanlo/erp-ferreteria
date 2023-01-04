import { FormGroup } from '@angular/forms';

export class Utilidades {

  static marcarFormularioComoTocado(formulario: FormGroup) {
    Object.values(formulario.controls).forEach(control => {
      control.markAsTouched();
    });
    formulario.updateValueAndValidity();
  }

}
