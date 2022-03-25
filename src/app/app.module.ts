import { BrowserModule } from '@angular/platform-browser';
import { Injectable, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BreakpointObserver, LayoutModule, MediaMatcher } from '@angular/cdk/layout';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { Platform } from '@angular/cdk/platform';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LayoutModule
  ],
  providers: [BreakpointObserver, MediaMatcher, Platform],
  bootstrap: [AppComponent]
})
export class AppModule { }
