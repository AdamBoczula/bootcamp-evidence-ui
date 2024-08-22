import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainsCharacterAndNumberDirective } from './contains-character-and-number.directive';

@NgModule({
  declarations: [ContainsCharacterAndNumberDirective],
  imports: [CommonModule],
  exports: [ContainsCharacterAndNumberDirective],
})
export class ValidatorsModule {}
