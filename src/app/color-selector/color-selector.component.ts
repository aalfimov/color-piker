import {Component, Directive, forwardRef, HostListener, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {ColorSelectorService} from './color-selector.service';



@Directive({selector: '[appKeyboardListener]'})
export class KeyboardListenerDirective {
  constructor(private service: ColorSelectorService) { }
  @HostListener('window:keyup.enter', ['$event'])
  keyEventEnter(event: KeyboardEvent) {
    // console.log('window:keyup.enter', event);
    // this.service.selectedColor = (document.activeElement.innerHTML.substring(109, 117));
    // let re = /^#[0-9a-f]{3,6}$/i;
    // this.service.selectedColor = (document.activeElement.innerHTML.replace(/^(#[0-9a-f]{3,6}$)/i, '[1]'));
    // console.log(document.activeElement.id);
    // this.service.selectedColor = ext.toString();
    // console.log(this.service.selectedColor);
    console.log(this.service.arrowKeyLocation);
  }
  // @HostListener('window:keyup', ['$event'])
  // keyEventArrowUp(event: KeyboardEvent) {
  //   console.log(event.code);
  // }
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

  constructor(private service: ColorSelectorService) { }

  clickOnButton() {
    this.service.dropdownButtonState = !this.service.dropdownButtonState;
  }

  clickOutsideButton() {
    this.service.dropdownButtonState = false;
  }

  chooseColor(pikedColor) {
    this.writeValue(pikedColor);
    this.service.selectedColor = pikedColor;
    console.log(pikedColor);
  }

  onChange: any = () => {  };
  onTouched: any = () => {  };

  get value() {
    return this.service.selectedColor;
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

  chooseColorEnter(color: string) {
    console.log('window:keyup.enter ', color);
  }

  keyPressed(event) {
    console.log(event);
  }
}
