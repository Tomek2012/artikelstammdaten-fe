import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ArtikestammApiService } from 'src/app/api/artikestamm-api.service';
import { Artikel } from 'src/app/models/artikel.model';
import { SearchCondition } from 'src/app/models/searchcondition.model';
import { Sortierung } from 'src/app/models/sortierung.model';

@Component({
  selector: 'app-artikelstamm-uebersicht',
  templateUrl: './artikelstamm-uebersicht.component.html',
  styleUrls: ['./artikelstamm-uebersicht.component.scss'],
})
export class ArtikelstammUebersichtComponent implements OnInit {
  constructor(private artikelstammService: ArtikestammApiService) {}

  filterForm = new FormGroup({
    sort: new FormControl('articleId'),
    filterFarbe: new FormControl('keineAuswahl'),
    artikelnummer: new FormControl(''),
    artikelname: new FormControl(''),
    gewinn: new FormControl(''),
    options: new FormControl('1'),
  });

  artikelstaemme: Artikel[] = [];

  colorValues: Sortierung[] = [
    { value: 'beige', viewValue: 'Beige' },
    { value: 'blue', viewValue: 'Blau' },
    { value: 'yellow', viewValue: 'Gelb' },
    { value: 'grey', viewValue: 'Grau' },
    { value: 'green', viewValue: 'Grün' },
    { value: 'purple', viewValue: 'Lila' },
    { value: 'multicoloured', viewValue: 'Mehrfarbig' },
    { value: 'orange', viewValue: 'Orange' },
    { value: 'pink', viewValue: 'Pink' },
    { value: 'red', viewValue: 'Rot' },
    { value: 'black', viewValue: 'Schwarz' },
    { value: 'white', viewValue: 'Weiß' },
  ];

  sortValues: Sortierung[] = [
    { value: 'articleId', viewValue: 'Artikel ID' },
    { value: 'ean', viewValue: 'EAN' },
    { value: 'gender', viewValue: 'Geschlecht' },
    { value: 'costPrice', viewValue: 'Selbstkostenpreis' },
    { value: 'msrp', viewValue: 'UVP' },
  ];

  sortierung?: string;

  ngOnInit(): void {
    this.getArtikelstaemmeStandard();
  }

  getArtikelstaemmeStandard() {
    this.artikelstammService.find([]).subscribe((res) => {
      this.artikelstaemme = res;
    });
  }

  loescheArtikelstamm(artikelnummer: string) {
    this.artikelstammService.deleteById(artikelnummer).subscribe(() => {
      this.getArtikelstaemmeStandard();
    });
  }

  getArtikelstammFilter(): void {
    var sortierkriterien: SearchCondition[] = [];

    if (this.filterForm.controls.artikelnummer.value) {
      let sortkriterium: SearchCondition;
      sortkriterium = {
        field: 'articleId',
        operator: 'eq',
        value: this.filterForm.controls.artikelnummer.value,
      };
      sortierkriterien.push(sortkriterium);
    }

    if (this.filterForm.controls.artikelname.value) {
      let sortkriterium: SearchCondition;
      sortkriterium = {
        field: 'displayNames.text',
        operator: 'regex',
        value: this.filterForm.controls.artikelname.value,
      };
      sortierkriterien.push(sortkriterium);
    }

    if (this.filterForm.controls.gewinn.value) {
      let sortkriterium: SearchCondition;
      sortkriterium = {
        field: 'priceDifference',
        operator: 'gte',
        value: this.filterForm.controls.gewinn.value,
      };
      sortierkriterien.push(sortkriterium);
    }

    if (
      this.filterForm.controls.filterFarbe.value != 'keineAuswahl' &&
      this.filterForm.controls.filterFarbe.value
    ) {
      let sortkriterium: SearchCondition;
      sortkriterium = {
        field: 'color',
        operator: 'eq',
        value: this.filterForm.controls.filterFarbe.value,
      };
      sortierkriterien.push(sortkriterium);
    }
    if (this.filterForm.controls.sort.value) {
      if (this.filterForm.controls.options.value === '1') {
        let sortkriterium: SearchCondition;
        sortkriterium = {
          field: this.filterForm.controls.sort.value,
          operator: 'sort',
          value: 'ascending',
        };
        sortierkriterien.push(sortkriterium);
      } else {
        let sortkriterium: SearchCondition;
        sortkriterium = {
          field: this.filterForm.controls.sort.value,
          operator: 'sort',
          value: 'descending',
        };
        sortierkriterien.push(sortkriterium);
      }
    }

    this.artikelstammService.find(sortierkriterien).subscribe((res) => {
      this.artikelstaemme = res;
    });
  }
}
