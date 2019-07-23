import {Component, Directive, ElementRef, forwardRef, HostListener, Input} from '@angular/core';
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
  ],
})

export class ColorSelectorComponent implements ControlValueAccessor {
  // tslint:disable-next-line:no-input-rename
  @Input('value') colorArray: string[] = [];
  public dropdownButtonState = false;
  selectedColor = 'lightgray';

  constructor() {
  }
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

  onChange: any = () => { };
  onTouched: any = () => { };

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

@Directive({selector: '[appKeyboardListener]'})
export class KeyboardListenerDirective {

  constructor(private colorSelector: ColorSelectorComponent, private el: ElementRef) {
  }

  // @HostListener('mouseenter', ['$event'])
  // onMouseEnter(event: any) {
  //   (this.el.nativeElement as HTMLElement).focus();
  // }

  @HostListener('window:keyup', ['$event'])
  keyEventArrow(event: KeyboardEvent) {
    switch (event.code) {
      case 'Enter':
        console.log(this.el.nativeElement.html);
        const rez = document.activeElement.getElementsByClassName('dropdown-item').item(0);
        return rez !== null ? this.colorSelector.chooseColor(rez.innerHTML) : null;
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
  }

  // @HostListener('document:click', ['$event'])
  // clickOut(event) {
  //   if (this.el.nativeElement.contains(event.target)) {
  //     console.log('clicked inside');
  //     this.text = 'clicked inside';
  //     this.colorSelector.clickOnButton();
  //   } else {
  //     console.log('clicked outside');
  //     this.colorSelector.clickOutsideButton();
  //     this.text = 'clicked outside';
  //   }
  // }

  // @HostListener('click')
  // clickInside() {
  //   this.colorSelector.clickOnButton();
  // }
  //
  // @HostListener('document:click')
  // clickout() {
  //   this.colorSelector.clickOutsideButton();
  //   // }
  // }
}
// @Directive({selector: '[appColorListener]'})
// export class ColorListenerDirective {
//   @HostBinding('class.open') isOpen = false;
//
//   @HostListener('click') toggleOpen() {
//     this.isOpen = !this.isOpen;
//     console.log(this.isOpen);
//   }
//
//   @HostListener('document:click')
//   clickOut() {
//     if (!this.isOpen) {
//       this.isOpen = false;
//       console.log(this.isOpen);
//     }
//   }
// }
  // @Input() color = '';
  //
  // constructor(private colorSelector: ColorSelectorComponent, private el: ElementRef) {
  // }
  //
  // @HostListener('window:keyup.enter', ['$event'])
  // keyEventEnter() {
  //   if (document.activeElement) {
  //     // console.log(document.activeElement.textContent);
  //     // console.log(this.color);
  //     this.colorSelector.chooseColor(this.color);
  //   }
  // }
