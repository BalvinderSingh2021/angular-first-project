import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import { WjGridSearchModule } from '@grapecity/wijmo.angular2.grid.search';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WjGridModule,
    WjGridSearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
