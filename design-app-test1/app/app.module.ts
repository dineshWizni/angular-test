import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule,FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import {NameEditorComponent} from './name-editor/name-editor.component'

@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
