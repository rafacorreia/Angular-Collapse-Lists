import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SmoothHeightAnimDirective } from './smoothHeight.directive';
import { AppComponent } from './app.component';
import { SortablejsModule } from 'ngx-sortablejs';
import {DndModule} from 'ng2-dnd';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, SortablejsModule.forRoot({ animation: 150 }), DndModule.forRoot() ],
  declarations: [ AppComponent, SmoothHeightAnimDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
