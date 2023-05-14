import { Description } from './description.model';
import { MaterialInformation } from './materialinformation.model';
import { PackingDimensions } from './packingdimension.model';
import { Size } from './size.model';

export interface Artikel {
  articleId: string;
  ean: string;
  displayNames: DisplayNames[];
  sizes: Size[];
  gender: string;
  color: string;
  unit: string;
  descriptions: Description[];
  materialInformation: MaterialInformation[];
  availableFrom: string;
  availableUntil: string;
  countryOrigin: string;
  costPrice: string;
  msrp: string;
  currency: string;
  photoURL: string;
  photoURLMini: string;
  packingDimensions: PackingDimensions;
}

interface DisplayNames {
  language: string;
  text: string;
}
