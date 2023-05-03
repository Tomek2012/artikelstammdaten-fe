import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArtikelstammComponent } from './pages/artikelstamm/artikelstamm.component';
import { ArtikelstammUebersichtComponent } from './pages/artikelstamm-uebersicht/artikelstamm-uebersicht.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    ArtikelstammComponent,
    ArtikelstammUebersichtComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
