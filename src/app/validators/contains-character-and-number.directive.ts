import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';

export function containsCharacterAndNumberValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const containsCharacterAndNumberRegexp = /^(?=.*[A-Za-z])(?=.*\d).+$/gm;
    const isValid = containsCharacterAndNumberRegexp.test(control.value);
    return isValid
      ? null
      : { containsCahracterAndNumber: { value: control.value } };
  };
}

@Directive({
  selector: '[appContainsCharacterAndNumber]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ContainsCharacterAndNumberDirective,
      multi: true,
    },
  ],
})
export class ContainsCharacterAndNumberDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return containsCharacterAndNumberValidator()(control);
  }
}
