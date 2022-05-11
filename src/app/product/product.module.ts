import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsComponent} from './products/products.component';
import {StringConverterPipe} from './products/string-converter.pipe';
import {ArraySplicePipe} from "./products/array-splice.pipe";
import {FormsModule} from "@angular/forms";
import {PowerToxPipe} from "./products/power-tox.pipe";
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from "primeng/button";
import {InputTextModule} from 'primeng/inputtext';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RippleModule} from "primeng/ripple";
import {InputNumberModule} from "primeng/inputnumber";
import {CalendarModule} from "primeng/calendar";
import {RatingModule} from 'primeng/rating';


@NgModule({
  declarations: [
    ProductsComponent,
    StringConverterPipe,
    ArraySplicePipe,
    PowerToxPipe


  ],
  imports: [
    CommonModule,
    FormsModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    BrowserAnimationsModule,
    RippleModule,
    InputNumberModule,
    CalendarModule,
    RatingModule,
  ],
  exports:[
    ProductsComponent
  ]
})
export class ProductModule { }
