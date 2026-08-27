import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customMinLength]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MinLengthDirective, multi: true }]
})
export class MinLengthDirective implements Validator {
  @Input('customMinLength') minLength: number = 3;

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value || '';
    if (value.length > 0 && value.length <this.minLength) {
      return { customMinLength: true };
    }
    return null;
  }
}
