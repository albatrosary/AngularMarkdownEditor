import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';

import { MarkdownPipe } from './pipes/markdown';
import { AppComponent } from './components';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  declarations: [
    MarkdownPipe,
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class MainModule {
  constructor() {
    console.log('MainModule');
  }
}