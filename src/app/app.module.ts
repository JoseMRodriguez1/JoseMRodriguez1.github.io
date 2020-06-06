import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JrseModule } from './jrse/jrse.module';
import { RoutingModule } from './routing/routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JrseModule,
    RoutingModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
