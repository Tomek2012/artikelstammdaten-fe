import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Description } from 'src/app/models/description.model';
import { DisplayNames } from 'src/app/models/displayname.model';

@Component({
  selector: 'app-artikel-card',
  templateUrl: './artikel-card.component.html',
  styleUrls: ['./artikel-card.component.scss'],
})
export class ArtikelCardComponent implements OnInit {
  @Input() artikelnamen: DisplayNames[] = [];
  @Input() artikelnummer: string = '483726';
  @Input() artikelbeschreibungen: Description[] = [];
  @Input() photoURL?: string;

  @Output() deleteButtonWasClicked = new EventEmitter<string>();

  artikelname?: string = 'Herren Training T-Shirt';
  artikelbeschreibung?: string =
    'Bleiben Sie während Ihres Trainings mit diesem Herren Training T-Shirt cool und trocken. Das atmungsaktive und feuchtigkeitsableitende Gewebe sorgt für Komfort.';

  constructor(private router: Router) {}

  ngOnInit(): void {
    var artikelname = this.artikelnamen.find((obj) => obj.language === 'DE');
    var artikelbeschreibung = this.artikelbeschreibungen.find(
      (obj) => obj.language === 'DE'
    );
    this.artikelname = artikelname?.text;
    this.artikelbeschreibung = artikelbeschreibung?.text;
  }

  editArticle(): void {}

  deleteArticle(): void {
    this.deleteButtonWasClicked.emit(this.artikelnummer);
  }

  onImgError(event: any) {
    event.target.src =
      'https://cdn.pixabay.com/photo/2012/04/24/12/29/no-symbol-39767_960_720.png';
    //Do other stuff with the event.target
  }
}