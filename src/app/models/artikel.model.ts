export class Artikel {
  id: number;
  ean: string;
  bezeichnung: string;

  constructor(id: number, ean: string, bezeichnung: string) {
    this.id = id;
    this.ean = ean;
    this.bezeichnung = bezeichnung;
  }
}
