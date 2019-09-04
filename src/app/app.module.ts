import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SmoothHeightAnimDirective } from './smoothHeight.directive';
import { AppComponent } from './app.component';
import { SortablejsModule } from 'ngx-sortablejs';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, SortablejsModule.forRoot({ animation: 150 }) ],
  declarations: [ AppComponent, SmoothHeightAnimDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
