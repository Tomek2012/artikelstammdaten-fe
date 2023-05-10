import { Component, OnInit } from '@angular/core';
import { Artikel } from 'src/app/models/artikel.model';

@Component({
  selector: 'app-artikelstamm-uebersicht',
  templateUrl: './artikelstamm-uebersicht.component.html',
  styleUrls: ['./artikelstamm-uebersicht.component.scss']
})
export class ArtikelstammUebersichtComponent implements OnInit {

  artikelstamme: Artikel[] = [
    {id: 1, ean: '123456789', bezeichnung: 'Artikel 1'},
    {id: 2, ean: '234567890', bezeichnung: 'Artikel 2'},
    {id: 3, ean: '345678901', bezeichnung: 'Artikel 3'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  editArtikel(artikel: Artikel) {
    // Hier kann die Bearbeitungslogik für den Artikel implementiert werden
    console.log('Artikel bearbeiten:', artikel);
  }

  deleteArtikel(artikel: Artikel) {
    // Hier kann die Löschlogik für den Artikel implementiert werden
    console.log('Artikel löschen:', artikel);
    const index = this.artikelstamme.indexOf(artikel);
    if (index !== -1) {
      this.artikelstamme.splice(index, 1);
    }
  }

}
