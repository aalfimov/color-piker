import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ClickOutsideModule} from 'ng-click-outside';

import {AppComponent} from './app.component';
import {ColorSelectorComponent} from './color-selector/color-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorSelectorComponent
  ],
  imports: [
    BrowserModule,
    ClickOutsideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
