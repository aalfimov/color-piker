import {Component, Directive, ElementRef, forwardRef, HostListener, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {ColorSelectorService} from './color-selector.service';
import {$} from 'protractor';


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
  ],
})

export class ColorSelectorComponent implements ControlValueAccessor {

  // tslint:disable-next-line:no-input-rename
  @Input('value') colorArray: string[] = [];

  constructor(private service: ColorSelectorService) {
  }

  clickOnButton() {
    this.service.dropdownButtonState = !this.service.dropdownButtonState;
  }

  clickOutsideButton() {
    this.service.dropdownButtonState = false;
  }

  chooseColor(pikedColor) {
    this.writeValue(pikedColor);
    this.service.selectedColor = pikedColor;
  }

  onChange: any = () => { };
  onTouched: any = () => { };

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
}

@Directive({selector: '[appKeyboardListener]'})
export class KeyboardListenerDirective {
  constructor(private colorSelector: ColorSelectorComponent, private el: ElementRef) {
  }
  // @HostListener('mouseenter', ['$event'])
  // onMouseEnter(event: any) {
  //   (this.el.nativeElement as HTMLElement).focus();
  // }
  public text: string;

  @HostListener('window:keyup', ['$event'])
  keyEventEnter(event: KeyboardEvent) {
    switch (event.code) {
      case 'Enter':
        const takeColor = document.activeElement.innerHTML
          .toString().replace(new RegExp('<div[^>]*> '), '').replace(' <\/div>', '');
        return takeColor.length < 8 ? this.colorSelector.chooseColor(takeColor) : null;
      case 'Escape':
        this.colorSelector.clickOutsideButton();
        break;
      case 'ArrowLeft':
        if (document.activeElement.previousSibling.firstChild) {
          (document.activeElement.previousElementSibling as HTMLElement).focus();
        }

        break;
      case 'ArrowRight':
        if (document.activeElement.nextSibling) {
          (document.activeElement.nextElementSibling as HTMLElement).focus();
        }
        break;
    }
    // console.log('нажата кнопка: ', event.code);
  }
  @HostListener('document:click', ['$event'])
  clickOut(event) {
    if (this.el.nativeElement.contains(event.target)) {
      console.log('clicked inside');
      this.text = 'clicked inside';
    } else {
      console.log('clicked outside');
      this.text = 'clicked outside';
    }
  }
}
