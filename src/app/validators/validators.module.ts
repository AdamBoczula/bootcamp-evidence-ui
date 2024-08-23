import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainsLetterAndNumberValidatorDirective } from './contains-letter-and-number.directive';

@NgModule({
  declarations: [ContainsLetterAndNumberValidatorDirective],
  imports: [CommonModule],
  exports: [ContainsLetterAndNumberValidatorDirective],
})
export class ValidatorsModule {}
