import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

export interface ChipType {
  name: string;
}

@Component({
  selector: 'app-chips-selector',
  standalone: true,
  imports: [MatChipsModule, MatIconModule, CommonModule],
  template: `
    <mat-chip-set aria-label="Subcategories selection">
      @for (chip of chips; track $index) {
        <div (click)="updateValue(chip)">
          <mat-chip>
            <div class="chip-content">
              {{ chip.name }}
              @if (chip.name === value?.name) {
                <mat-icon
                  aria-hidden="false"
                  aria-label="Selected chip"
                  fontIcon="check"
                ></mat-icon>
              }
            </div>
          </mat-chip>
        </div>
      }
    </mat-chip-set>
  `,
  styleUrl: './chips-selector.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChipsSelectorComponent),
      multi: true,
    },
  ],
})
export class ChipsSelectorComponent<T extends ChipType>
  implements ControlValueAccessor
{
  public value?: ChipType;
  public disabled = false;

  public onChange!: (chip: string) => {};
  public onTouch!: () => {};

  @Input()
  public chips: T[] = [];

  writeValue(value: ChipType): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    console.log('🚀 ~ registerOnChange ~ fn:', fn);
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public updateValue(chip: ChipType): void {
    console.log('🚀 ~ updateValue ~ chip:', chip);
    this.writeValue(chip);
    this.onChange(chip.name);
    this.onTouch();
  }
}
