import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtikestammApiService } from 'src/app/api/artikestamm-api.service';
import { Artikel } from 'src/app/models/artikel.model';

@Component({
  selector: 'app-artikelstamm',
  templateUrl: './artikelstamm.component.html',
  styleUrls: ['./artikelstamm.component.scss'],
})
export class ArtikelstammComponent implements OnInit {
  constructor(
    private activatedroute: ActivatedRoute,
    private artikelstammService: ArtikestammApiService
  ) {}

  article: Artikel = {
    articleId: '483726',
    ean: '3827461492123',
    displayNames: [
      {
        language: 'EN',
        text: "Men's Training T-Shirt",
      },
      {
        language: 'DE',
        text: 'Herren Training T-Shirt',
      },
      {
        language: 'ES',
        text: 'Camiseta de entrenamiento para hombre',
      },
    ],
    sizes: [
      {
        country: 'US',
        size: 'M',
      },
      {
        country: 'EU',
        size: 'L',
      },
      {
        country: 'UK',
        size: 'M',
      },
    ],
    gender: 'Male',
    color: 'black',
    unit: 'Piece',
    descriptions: [
      {
        language: 'EN',
        text: "Stay cool and dry during your workout with this Men's Training T-Shirt, made with breathable and moisture-wicking fabric.",
      },
      {
        language: 'DE',
        text: 'Bleiben Sie während Ihres Trainings mit diesem Herren Training T-Shirt cool und trocken. Das atmungsaktive und feuchtigkeitsableitende Gewebe sorgt für Komfort.',
      },
      {
        language: 'ES',
        text: 'Manténgase fresco y seco durante su entrenamiento con esta camiseta de entrenamiento para hombre, hecha con tela transpirable y que absorbe la humedad.',
      },
    ],
    materialInformation: [
      {
        material: 'polyester',
        percentage: '100',
      },
    ],
    availableFrom: '2023-06-01',
    availableUntil: '2023-12-31',
    countryOrigin: 'DE',
    costPrice: '15.99',
    msrp: '29.99',
    currency: 'EUR',
    photoURL: 'https://pictures/pic1.com',
    photoURLMini: 'https://pictures/minipic1.com',
    packingDimensions: {
      length: '30',
      width: '20',
      height: '2',
      unit: 'mm',
    },
  };

  newDisplayNameLanguage = '';
  newDescriptionLanguage = '';
  newSizeForCountry = '';
  newMaterial = '';

  allLanguages = ['DE', 'EN', 'FR', 'IT', 'ES']; // Liste aller verfügbaren Sprachen
  allCountriesForSizes = ['DE', 'FR', 'UK', 'IT', 'ES', 'US'];
  allCountries = ['CN', 'DE', 'FR', 'UK', 'IN', 'IT', 'PT', 'ES', 'US'];

  ngOnInit(): void {
    var id = this.activatedroute.snapshot.params['id'];
    this.artikelstammService.searchById(id).subscribe((res) => {
      this.article = res[0];
    })
  }

  addDisplayName(language: string) {
    if (language != '') {
      this.article.displayNames.push({ language: language, text: '' });
    }
  }

  removeDisplayName(index: number) {
    this.article.displayNames.splice(index, 1);
  }

  getAvailableLanguagesForDisplayName(): string[] {
    const usedLanguages = this.article.displayNames.map(
      (displayName) => displayName.language
    );
    const availableLanguages = this.allLanguages.filter(
      (language) => !usedLanguages.includes(language)
    );
    this.newDisplayNameLanguage = availableLanguages[0];
    return availableLanguages;
  }

  getLanguage(languageCode: string): string {
    var language = languageCode;
    switch (languageCode) {
      case 'EN':
        language = 'Englisch';
        break;
      case 'DE':
        language = 'Deutsch';
        break;
      case 'ES':
        language = 'Spanisch';
        break;
      case 'FR':
        language = 'Französisch';
        break;
      case 'IT':
        language = 'Italienisch';
        break;
    }
    return language;
  }

  getCountry(countryCode: string): string {
    var country = countryCode;
    switch (countryCode) {
      case 'CN':
        country = 'China';
        break;
      case 'DE':
        country = 'Deutschland';
        break;
      case 'ES':
        country = 'Spanien';
        break;
      case 'EU':
        country = 'Europa';
        break;
      case 'FR':
        country = 'Frankreich';
        break;
      case 'IN':
        country = 'Indien';
        break;
      case 'IT':
        country = 'Italien';
        break;
      case 'PT':
        country = 'Portugal';
        break;
      case 'UK':
        country = 'Großbritanien';
        break;
      case 'US':
        country = 'USA';
        break;
    }
    return country;
  }

  addSize(country: string) {
    if (country != '') {
      this.article.sizes.push({ country: country, size: '' });
    }
  }

  removeSize(index: number) {
    this.article.sizes.splice(index, 1);
  }

  getAvailableCountriesForSizes(): string[] {
    const usedCountries = this.article.sizes.map((size) => size.country);
    const availableCountries = this.allCountriesForSizes.filter(
      (size) => !usedCountries.includes(size)
    );
    this.newSizeForCountry = availableCountries[0];
    return availableCountries;
  }

  addDescription(language: string) {
    if (language != '') {
      this.article.descriptions.push({ language: language, text: '' });
    }
  }

  removeDescription(index: number) {
    this.article.descriptions.splice(index, 1);
  }

  getAvailableLanguagesForDescription(): string[] {
    const usedLanguages = this.article.descriptions.map(
      (description) => description.language
    );
    const availableLanguages = this.allLanguages.filter(
      (language) => !usedLanguages.includes(language)
    );
    this.newDescriptionLanguage = availableLanguages[0];
    return availableLanguages;
  }

  validateMaterialPercentages(lastModifiedIndex: number) {
    var currentPercentage =
      this.article.materialInformation[lastModifiedIndex].percentage;

    if (currentPercentage == null || isNaN(Number(currentPercentage))) {
      this.article.materialInformation[lastModifiedIndex].percentage = '0';
      return;
    }

    var sum = 0;
    for (let material of this.article.materialInformation) {
      sum += Number(material.percentage);
    }
    if (sum > 100) {
      alert('Die Summe der Prozentsätze darf 100% nicht überschreiten.');
      this.article.materialInformation[lastModifiedIndex].percentage = String(
        Number(currentPercentage) - sum + 100
      );
    }
  }

  addMaterial(material: string) {
    if (material != '') {
      this.article.materialInformation.push({
        material: material,
        percentage: '0',
      });
    }
  }

  removeMaterial(index: number) {
    this.article.materialInformation.splice(index, 1);
  }

  getAvailableMaterial(): string[] {
    const usedMaterials = this.article.materialInformation.map(
      (material) => material.material
    );
    const availableMaterials = this.allMaterials.filter(
      (material) => !usedMaterials.includes(material)
    );
    this.newMaterial = availableMaterials[0];
    return availableMaterials;
  }

  allMaterials = [
    'acrylic',
    'cotton',
    'denim',
    'stainless steel',
    'spandex',
    'fleece',
    'rubber',
    'synthetic',
    'leather',
    'mesh',
    'nylon',
    'polyester',
    'wool',
  ];
  getMaterial(englishMaterial: string): string {
    var material = englishMaterial;
    switch (englishMaterial) {
      case 'acrylic':
        material = 'Acryl';
        break;
      case 'cotton':
        material = 'Baumwolle';
        break;
      case 'denim':
        material = 'Denim';
        break;
      case 'stainless steel':
        material = 'Edelstahl';
        break;
      case 'spandex':
        material = 'Elastan';
        break;
      case 'fleece':
        material = 'Fleece';
        break;
      case 'rubber':
        material = 'Kautschuk';
        break;
      case 'synthetic':
        material = 'Kunststoff';
        break;
      case 'leather':
        material = 'Leder';
        break;
      case 'mesh':
        material = 'Mesh';
        break;
      case 'nylon':
        material = 'Nylon';
        break;
      case 'polyester':
        material = 'Polyester';
        break;
      case 'wool':
        material = 'Wolle';
        break;
    }
    return material;
  }

  saveArticleData() {
    this.article.currency = 'EUR';
    this.article.packingDimensions.unit = 'mm';
  }
}
