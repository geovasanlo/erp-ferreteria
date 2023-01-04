import { ValidatorFn, AbstractControl } from '@angular/forms';

export function igualA(nombreControl: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (control.parent) if (control.parent.controls[nombreControl].value === control.value) return null;
    return { igualA: true };
  };
}
