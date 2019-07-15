import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';


interface PaletteColors {
  title: string;
  value: string;
}

@Component({
  selector: 'app-color-selector',
  templateUrl: './color-selector.component.html',
  styleUrls: ['./color-selector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ColorSelectorComponent),
      multi: true
    }
  ]
})

export class ColorSelectorComponent implements ControlValueAccessor {
  selectedColor = 'gray';
  dropdownButtonState = false;
  value: string;
  onChange: () => void;
  onTouched: () => void;
  disabled: boolean;
  @Input() colorArray: PaletteColors[] = [];
  // ['#f5f542', '#f23565', '#3cb4f0', '#35f267', '#855313', '#871b48', '#1f5494', '#21943f']
  // https://medium.com/@maks.zhitlov/custom-form-controls-in-angular-4c69a94d5de6
  // https://www.youtube.com/watch?v=EY0Nw06xyt8
  constructor() {
  }

  chooseColor(pikedColor) {
    this.selectedColor = pikedColor;
  }

  clickOnButton() {
    this.dropdownButtonState = !this.dropdownButtonState;
  }

  clickOutsideButton() {
    this.dropdownButtonState = false;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(value: any): void {
    this.value = value ? value : '';
  }
}
