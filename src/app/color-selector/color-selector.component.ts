import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-color-selector',
  templateUrl: './color-selector.component.html',
  styleUrls: ['./color-selector.component.scss'],
})

export class ColorSelectorComponent implements OnInit {
  selectedColor = 'gray';
  dropdownButtonState = false;
  @Input() colorArray = ['#f5f542', '#f23565', '#3cb4f0', '#35f267', '#855313', '#871b48', '#1f5494', '#21943f'];

  constructor() {
  }

  ngOnInit(): void {
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
}
