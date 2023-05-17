import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArtikestammApiService } from 'src/app/api/artikestamm-api.service';
import { Artikel } from 'src/app/models/artikel.model';

@Component({
  selector: 'app-artikelstamm-anlegen',
  templateUrl: './artikelstamm-anlegen.component.html',
  styleUrls: ['./artikelstamm-anlegen.component.scss'],
})
export class ArtikelstammAnlegenComponent {
  constructor(
    private artikelstammService: ArtikestammApiService,
    private router: Router
  ) {}

  article: Artikel = {
    articleId: '',
    ean: '',
    displayNames: [],
    sizes: [],
    gender: '',
    color: '',
    unit: '',
    descriptions: [],
    materialInformation: [],
    availableFrom: '',
    availableUntil: '',
    countryOrigin: '',
    costPrice: '',
    msrp: '',
    currency: '',
    photoURL: '',
    photoURLMini: '',
    packingDimensions: {
      length: '',
      width: '',
      height: '',
      unit: '',
    },
  };

  newDisplayNameLanguage = '';
  newDescriptionLanguage = '';
  newSizeForCountry = '';
  newMaterial = '';

  allLanguages = ['DE', 'EN', 'FR', 'IT', 'ES']; // Liste aller verfügbaren Sprachen
  allCountriesForSizes = ['DE', 'FR', 'UK', 'IT', 'ES', 'US'];
  allCountries = ['CN', 'DE', 'FR', 'UK', 'IN', 'IT', 'PT', 'ES', 'US'];

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
    if (this.article.articleId != null) {
      this.artikelstammService.add(this.article).subscribe(() => {
        this.router.navigateByUrl('');
      });
    }
  }
}
