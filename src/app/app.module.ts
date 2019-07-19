import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ClickOutsideModule} from 'ng-click-outside';

import {AppComponent} from './app.component';
import {ColorListenerDirective, ColorSelectorComponent, KeyboardListenerDirective} from './color-selector/color-selector.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormComponent } from './form/form.component';
import {MatTabsModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ColorSelectorComponent,
    FormComponent,
    KeyboardListenerDirective,
    ColorListenerDirective
  ],
  imports: [
    BrowserModule,
    ClickOutsideModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
