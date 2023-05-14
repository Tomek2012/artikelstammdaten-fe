import { Component, OnInit } from '@angular/core';
import { ArtikestammApiService } from 'src/app/api/artikestamm-api.service';
import { Artikel } from 'src/app/models/artikel.model';

@Component({
  selector: 'app-artikelstamm-uebersicht',
  templateUrl: './artikelstamm-uebersicht.component.html',
  styleUrls: ['./artikelstamm-uebersicht.component.scss'],
})
export class ArtikelstammUebersichtComponent implements OnInit {
  constructor(private artikelstammService: ArtikestammApiService) {}

  artikelstaemme: Artikel[] = [];

  ngOnInit(): void {
    this.getArtikelstaemme();
  }

  getArtikelstaemme() {
    this.artikelstammService.getAllArtikelstammdaten().subscribe((res) => {
      this.artikelstaemme = res;
      console.log(this.artikelstaemme);
    });
  }

  loescheArtikelstamm(artikelnummer: string) {
    console.log(artikelnummer);
    this.artikelstammService.deleteById(artikelnummer).subscribe(() => {
      this.getArtikelstaemme();
    });
  }
}
