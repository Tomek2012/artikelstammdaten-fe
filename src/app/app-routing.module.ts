import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtikelstammUebersichtComponent } from './pages/artikelstamm-uebersicht/artikelstamm-uebersicht.component';
import { ArtikelstammComponent } from './pages/artikelstamm/artikelstamm.component';

const routes: Routes = [
  { path: '', component: ArtikelstammUebersichtComponent },
  { path: 'artikelstamm', component: ArtikelstammComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
