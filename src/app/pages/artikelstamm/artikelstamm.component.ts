import { Component  } from '@angular/core';

@Component({
  selector: 'app-artikelstamm',
  templateUrl: './artikelstamm.component.html',
  styleUrls: ['./artikelstamm.component.scss']
})
export class ArtikelstammComponent {
  article = {
		"ArticleId": "483726",
		"EAN": "3827461492123",
		"DisplayNames": [{
			"Language": "EN",
			"Text": "Men's Training T-Shirt"
		}, {
			"Language": "DE",
			"Text": "Herren Training T-Shirt"
		}, {
			"Language": "ES",
			"Text": "Camiseta de entrenamiento para hombre"
		}],
		"Sizes": [{
			"Country": "US",
			"Size": "M"
		}, {
			"Country": "EU",
			"Size": "L"
		}, {
			"Country": "UK",
			"Size": "M"
		}],
		"Gender": "Male",
		"Color": "black",
		"Unit": "Piece",
		"Descriptions": [{
			"Language": "EN",
			"Text": "Stay cool and dry during your workout with this Men's Training T-Shirt, made with breathable and moisture-wicking fabric."
		}, {
			"Language": "DE",
			"Text": "Bleiben Sie während Ihres Trainings mit diesem Herren Training T-Shirt cool und trocken. Das atmungsaktive und feuchtigkeitsableitende Gewebe sorgt für Komfort."
		}, {
			"Language": "ES",
			"Text": "Manténgase fresco y seco durante su entrenamiento con esta camiseta de entrenamiento para hombre, hecha con tela transpirable y que absorbe la humedad."
		}],
		"MaterialInformation": [{
			"Material": "polyester",
			"Percentage": "100"
		}],
		"AvailableFrom": "2023-06-01",
		"AvailableUntil": "2023-12-31",
		"CountryOrigin": "DE",
		"CostPrice": "15.99",
		"MSRP": "29.99",
		"Currency": "EUR",
		"PhotoURL": "https://pictures/pic1.com",
		"PhotoURLMini": "https://pictures/minipic1.com",
		"PackingDimensions": {
			"Length": "30",
			"Width": "20",
			"Height": "2",
			"Unit": "mm"
		}
	}

  newDisplayNameLanguage = "";
  newDescriptionLanguage = "";
  newSizeForCountry = "";
  newMaterial = "";

  allLanguages = ['DE', 'EN', 'FR', 'IT', 'ES']; // Liste aller verfügbaren Sprachen
  allCountriesForSizes = ['DE', 'FR', "UK", "IT", 'ES', "US"];
  allCountries = ["CN", 'DE', 'FR', "UK", "IN", "IT", "PT", 'ES', "US"];
  

  addDisplayName(language:string) {
    if (language != "") {
      this.article.DisplayNames.push({ Language: language, Text: '' });
    }
  }

  removeDisplayName(index: number) {
    this.article.DisplayNames.splice(index, 1);
  }

  getAvailableLanguagesForDisplayName(): string[] {
    const usedLanguages = this.article.DisplayNames.map(displayName => displayName.Language);
    const availableLanguages = this.allLanguages.filter(language => !usedLanguages.includes(language))
    this.newDisplayNameLanguage = availableLanguages[0];
    return availableLanguages;
  }

  getLanguage(languageCode: string): string {
    var language = languageCode;
    switch (languageCode) {
      case "EN":
        language = "Englisch";
        break;
      case "DE":
        language = "Deutsch";
        break;
      case "ES":
        language = "Spanisch";
        break;
      case "FR":
        language = "Französisch";
        break;
      case "IT":
        language = "Italienisch";
        break;
    }
    return language;
  }

  getCountry(countryCode: string): string {
    var country = countryCode;
    switch (countryCode) {
      case "CN":
        country = "China";
        break;
      case "DE":
        country = "Deutschland";
        break;
      case "ES":
        country = "Spanien";
        break;
      case "EU":
        country = "Europa";
        break;
      case "FR":
        country = "Frankreich";
        break;
      case "IN":
        country = "Indien";
        break;
      case "IT":
        country = "Italien";
        break;
      case "PT":
        country = "Portugal";
        break;
      case "UK":
        country = "Großbritanien";
        break;
      case "US":
        country = "USA";
        break;
    }
    return country;
  }

  addSize(country:string) {
    if (country != "") {
      this.article.Sizes.push({ Country: country, Size: '' });
    }
  }

  removeSize(index: number) {
    this.article.Sizes.splice(index, 1);
  }

  getAvailableCountriesForSizes(): string[] {
    const usedCountries = this.article.Sizes.map(size => size.Country);
    const availableCountries = this.allCountriesForSizes.filter(size => !usedCountries.includes(size))
    this.newSizeForCountry = availableCountries[0];
    return availableCountries;
  }

  addDescription(language:string) {
    if (language != "") {
      this.article.Descriptions.push({ Language: language, Text: '' });
    }
  }

  removeDescription(index: number) {
    this.article.Descriptions.splice(index, 1);
  }

  getAvailableLanguagesForDescription(): string[] {
    const usedLanguages = this.article.Descriptions.map(description => description.Language);
    const availableLanguages = this.allLanguages.filter(language => !usedLanguages.includes(language))
    this.newDescriptionLanguage = availableLanguages[0];
    return availableLanguages;
  }

  validateMaterialPercentages(lastModifiedIndex: number) {
    var currentPercentage = this.article.MaterialInformation[lastModifiedIndex].Percentage;

    if (currentPercentage == null || isNaN(Number(currentPercentage))) {
      this.article.MaterialInformation[lastModifiedIndex].Percentage = "0";
      return;
    }

    var sum = 0;
    for (let material of this.article.MaterialInformation) {
      sum += Number(material.Percentage);
    }
    if (sum > 100) {
      alert("Die Summe der Prozentsätze darf 100% nicht überschreiten.");
      this.article.MaterialInformation[lastModifiedIndex].Percentage = String(Number(currentPercentage) - sum + 100);
    }
  }

  addMaterial(material:string) {
    if (material != "") {
      this.article.MaterialInformation.push({ Material: material, Percentage: '0' });
    }
  }

  removeMaterial(index: number) {
    this.article.MaterialInformation.splice(index, 1);
  }

  getAvailableMaterial(): string[] {
    const usedMaterials = this.article.MaterialInformation.map(material => material.Material);
    const availableMaterials = this.allMaterials.filter(material => !usedMaterials.includes(material))
    this.newMaterial = availableMaterials[0];
    return availableMaterials;
  }

  allMaterials = ["acrylic", "cotton", "denim", "stainless steel", "spandex", "fleece", "rubber", "synthetic", "leather", "mesh", "nylon", "polyester", "wool"];
  getMaterial(englishMaterial: string): string{
    var material = englishMaterial;
    switch (englishMaterial) {
      case "acrylic":
        material = "Acryl";
        break;
      case "cotton":
        material = "Baumwolle"
        break;
      case "denim":
        material = "Denim";
        break;
      case "stainless steel":
        material = "Edelstahl";
        break;
      case "spandex":
        material = "Elastan";
        break;
      case "fleece":
        material = "Fleece"
        break;
      case "rubber":
        material = "Kautschuk";
        break;
      case "synthetic":
        material = "Kunststoff";
        break;
      case "leather":
        material = "Leder";
        break;
      case "mesh":
        material = "Mesh";
        break;
      case "nylon":
        material = "Nylon";
        break;
      case "polyester":
        material = "Polyester";
        break;
      case "wool":
        material = "Wolle";
        break;
    }
    return material;
  }
  

  saveArticleData(){
    this.article.Currency = "EUR";
    this.article.PackingDimensions.Unit = "mm";
  }
}
