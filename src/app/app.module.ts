import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NumPadComponent } from './num-pad/num-pad.component';
import { DisplayComponent } from './display/display.component';
import { ActionPadComponent } from './action-pad/action-pad.component';

@NgModule({
  declarations: [
    AppComponent,
    NumPadComponent,
    DisplayComponent,
    ActionPadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
