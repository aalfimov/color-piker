import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorSelectorService {
  public dropdownButtonState = false;
  selectedColor = 'lightgray';

  constructor() {
  }
}
