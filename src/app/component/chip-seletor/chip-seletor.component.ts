import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

interface ChipType {
  name: string;
}

@Component({
  selector: 'app-chip-seletor',
  standalone: true,
  imports: [MatChipsModule, MatIconModule],
  template: `
    <mat-chip-set aria-label="Subcategories selection">
      @for (chip of chips; track $index) {
        <div (click)="updateValue(chip)" class="chip-wrapper">
          <mat-chip>
            <div class="chip-container">
              {{ chip.name }}
              @if (chip.name === value?.name) {
                <mat-icon
                  aria-hidden="false"
                  aria-label="Selected Chip"
                  fontIcon="check"
                ></mat-icon>
              }
            </div>
          </mat-chip>
        </div>
      }
    </mat-chip-set>
  `,
  styleUrl: './chip-seletor.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChipSeletorComponent),
      multi: true,
    },
  ],
})
export class ChipSeletorComponent implements ControlValueAccessor {
  @Input({ required: true })
  public chips: ChipType[] = [];
  public onChange!: (value: string) => void;
  public onTouch!: () => void;
  public disabled = false;
  public value?: ChipType;

  public writeValue(obj: ChipType): void {
    this.value = obj;
  }
  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  public setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  public updateValue(chip: ChipType): void {
    this.writeValue(chip);
    this.onChange(chip.name);
    this.onTouch();
    this.writeValue(chip);
  }
}
