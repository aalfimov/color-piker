import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorSelectorService {
  public dropdownButtonState = false;
  selectedColor = 'lightgray';
  arrowKeyLocation = 0;
  length: 0;
  domEles;

  constructor() {
  }

  keyDown(event: KeyboardEvent) {
    switch (event.keyCode) {
      case 38: // this is the ascii of arrow up
        this.arrowKeyLocation--;
        break;
      case 40: // this is the ascii of arrow down
        this.arrowKeyLocation++;
        break;
    }
  }

  // moveCell(e) {
  //   const activeEle = document.activeElement;
  //   const activeEleIndex = Array.prototype.indexOf.call(this.domEles, activeEle);
  //   if (e.key === 'ArrowRight' && activeEleIndex < this.length - 1) {
  //     activeEle.nextElementSibling.focus();
  //   }
  //
  //   if (e.key === 'ArrowLeft' && activeEleIndex > 0) {
  //     activeEle.previousElementSibling.;
  //   }
  // }
}
