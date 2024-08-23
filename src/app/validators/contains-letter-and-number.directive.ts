import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';

export function containsLetterAndNumberValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const validatorRegExp = /^(?=.*[A-Za-z])(?=.*\d).+$/;
    const isValid = validatorRegExp.test(control.value);
    return isValid ? null : { containsLetterAndNumber: true };
  };
}

@Directive({
  selector: '[containsLetterAndNumber]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ContainsLetterAndNumberValidatorDirective,
      multi: true,
    },
  ],
})
export class ContainsLetterAndNumberValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return containsLetterAndNumberValidator()(control);
  }
}
