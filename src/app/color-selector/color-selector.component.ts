import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-color-selector',
  templateUrl: './color-selector.component.html',
  styleUrls: ['./color-selector.component.scss']
})
export class ColorSelectorComponent implements OnInit {
  selectedColor = '#f5f542';
  color1 = '#f5f542';
  color2 = '#f23565';
  color3 = '#3cb4f0';
  color4 = '#35f267';
  color5 = '#855313';
  color6 = '#871b48';
  color7 = '#1f5494';
  color8 = '#21943f';

  constructor() {
  }

  ngOnInit(): void {
  }

  chooseColor(pikedColor) {
    this.selectedColor = pikedColor;
  }
}
