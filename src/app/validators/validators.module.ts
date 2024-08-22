import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainsCharacterAndNumberValidatorDirective } from './character-number-validator.directive';

@NgModule({
  declarations: [ContainsCharacterAndNumberValidatorDirective],
  imports: [CommonModule],
  exports: [ContainsCharacterAndNumberValidatorDirective],
})
export class ValidatorsModule {}
