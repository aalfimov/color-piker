import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';


@Component({
  selector: 'app-color-selector',
  templateUrl: './color-selector.component.html',
  styleUrls: ['./color-selector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ColorSelectorComponent),
      multi: true
    },
  ]
})

export class ColorSelectorComponent implements ControlValueAccessor {

  // tslint:disable-next-line:no-input-rename
  @Input('value') colorArray: string[] = [];
  selectedColor = 'lightgray';
  private dropdownButtonState = false;

  constructor() { }
  clickOnButton() {
    this.dropdownButtonState = !this.dropdownButtonState;
  }

  clickOutsideButton() {
    this.dropdownButtonState = false;
  }

  chooseColor(pikedColor) {
    this.writeValue(pikedColor);
    this.selectedColor = pikedColor;
  }

  onChange: any = () => {  };
  onTouched: any = () => {  };

  get value() {
    return this.selectedColor;
  }

  set value(val) {
    this.onChange(val);
    this.onTouched();
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  writeValue(value) {
    if (value) {
      this.value = value;
    }
  }
}
