import {Component, Directive, forwardRef, HostListener, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';



@Directive({selector: '[appOnlyMyBacon]'})
export class KeyboardListenerDirective {

  @HostListener('window:keyup', ['$event'])
  keyEventArrowUp(event: KeyboardEvent) {
    console.log(event.code);
  }
  // @HostListener('window:keyup.arrowleft', ['$event'])
  // keyEventArrowLeft(event: KeyboardEvent) {
  //   console.log('window:keyup.arrowleft');
  // }
  // @HostListener('window:keyup.arrowdown', ['$event'])
  // keyEventArrowDown(event: KeyboardEvent) {
  //   console.log('window:keyup.arrowdown');
  // }
  // @HostListener('window:keyup.arrowright', ['$event'])
  // keyEventArrowRight(event: KeyboardEvent) {
  //   console.log('window:keyup.arrowright');
  // }
  // @HostListener('window:keyup.enter', ['$event'])
  // keyEventEnter(event: KeyboardEvent) {
  //   console.log('window:keyup.enter');
  // }
  // @HostListener('window:keyup.escape', ['$event'])
  // keyEventEscape(event: KeyboardEvent) {
  // }
  // @HostListener('mouseenter', ['$event'])
  // onMouseEnter(event: any) {
  //   console.log(event);
  // }
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
    },
  ]
})

export class ColorSelectorComponent implements ControlValueAccessor {

  // tslint:disable-next-line:no-input-rename
  @Input('value') colorArray: string[] = [];
  selectedColor = 'lightgray';
  arrowkeyLocation = 0;
  public dropdownButtonState = false;

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
    console.log(pikedColor);
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
  keyDown(event: KeyboardEvent) {
    switch (event.keyCode) {
      case 38: // this is the ascii of arrow up
        this.arrowkeyLocation--;
        break;
      case 40: // this is the ascii of arrow down
        this.arrowkeyLocation++;
        break;
    }
  }
}
