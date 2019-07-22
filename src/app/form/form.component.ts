import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public colorForm: FormGroup;
  @Input()palette: string[] = ['black', '#f23565', '#3cb4f0', '#35f267', '#855313', '#871b48', '#1f5494', '#21943f'];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.colorForm = this.fb.group({
      color: ['', Validators.required]
    });
  }
}
