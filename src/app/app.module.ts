import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ClickOutsideModule} from 'ng-click-outside';

import {AppComponent} from './app.component';
import {ColorSelectorComponent} from './color-selector/color-selector.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorSelectorComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    ClickOutsideModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
