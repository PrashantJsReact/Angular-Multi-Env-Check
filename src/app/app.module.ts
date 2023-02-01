import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './Components/comp1/comp1.component';
import { Comp2Component } from './Components/comp2/comp2.component';
import { Comp3Component } from './Components/comp3/comp3.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { Comp4Component } from './Components/comp4/comp4.component';
import { Comp5Component } from './Components/comp5/comp5.component';
import { NgxSpinnerComponent } from './ngx-spinner/ngx-spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    Comp5Component,
    NgxSpinnerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
