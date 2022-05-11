import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {ProductModule} from "./product/product.module";
import {DialogModule} from 'primeng/dialog';


@NgModule({
  declarations: [
    AppComponent,
  ],

    imports: [
        BrowserModule,
        FormsModule,
        ProductModule,
      DialogModule
    ],
  exports: [

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
