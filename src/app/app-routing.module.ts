import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtikelstammUebersichtComponent } from './pages/artikelstamm-uebersicht/artikelstamm-uebersicht.component';
import { ArtikelstammComponent } from './pages/artikelstamm/artikelstamm.component';
import { ArtikelstammAnlegenComponent } from './pages/artikelstamm-anlegen/artikelstamm-anlegen.component';

// Define Routes for Navigation between pages 
const routes: Routes = [
  { path: '', component: ArtikelstammUebersichtComponent },
  { path: 'anlegen', component: ArtikelstammAnlegenComponent }, // Page for adding new articles
  { path: 'artikelstamm/:id', component: ArtikelstammComponent }, // Page to edit articles
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
