import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtikelstammUebersichtComponent } from './pages/artikelstamm-uebersicht/artikelstamm-uebersicht.component';
import { ArtikelstammComponent } from './pages/artikelstamm/artikelstamm.component';
import { ArtikelstammAnlegenComponent } from './pages/artikelstamm-anlegen/artikelstamm-anlegen.component';

const routes: Routes = [
  { path: '', component: ArtikelstammUebersichtComponent },
  { path: 'anlegen', component: ArtikelstammAnlegenComponent },
  { path: 'artikelstamm/:id', component: ArtikelstammComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
