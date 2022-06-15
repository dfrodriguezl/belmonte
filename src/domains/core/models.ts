import { DuomoProduct, MilanoProduct, PantheonProduct } from "assets";

export interface SearchParams {
  location: LocationSimple | undefined;
  area: number;
  density: Density;
}

export interface Location {
  id: number;
  city: string;
  density: number;
  description: string;
  urban: {
    maxPriFloors: number;
    maxSecFloors: number;
    streetFloors: number;
    windowPercentage: number;
    unitsNumberType: number;
    description: string;
    density: number;
    flatSize: number;
    flatType: number;
    regen: number;
    lat: number;
    lon: number;
    p_vivs: number;
    axisSelection: number;
    typologies: number;
    emptySpaceSelection: number;
    undefinedTower: number;
    streetDensity: number;
    islandSpacings: number;
    floorsAlignment: number;
    unitsOrganization: number;
  },
  suburban: {
    maxPriFloors: number;
    maxSecFloors: number;
    streetFloors: number;
    windowPercentage: number;
    unitsNumberType: number;
    description: string;
    density: number;
    flatSize: number;
    flatType: number;
    regen: number;
    lat: number;
    lon: number;
    p_vivs: number;
    axisSelection: number;
    typologies: number;
    emptySpaceSelection: number;
    undefinedTower: number;
    streetDensity: number;
    islandSpacings: number;
    floorsAlignment: number;
    unitsOrganization: number;
  }
}

export interface LocationSimple {
  id: number;
  city: string;
  densityGeneral: number;
  description: string;
  maxPriFloors: number;
  maxSecFloors: number;
  streetFloors: number;
  windowPercentage: number;
  unitsNumberType: number;
  density: number;
  flatSize: number;
  flatType: number;
  regen: number;
  lat: number;
  lon: number;
  p_vivs: number;
  axisSelection: number;
  typologies: number;
  emptySpaceSelection: number;
  undefinedTower: number;
  streetDensity: number;
  islandSpacings: number;
  floorsAlignment: number;
  unitsOrganization: number;
  balconyType?: number;
}

export interface Density {
  label: string;
  subLabel: string;
  value: number;
  type: string;
}

export interface Terrain {
  name?: string;
  owner?: string;
  path?: string;
  location?: LocationSimple;
  densityGeneral?: number;
}

export interface Product {
  name?: string;
  subtitle?: string;
  ingredients?: string[];
  img?: string;
  message?: string;
}

export const Densities = [
  {
    value: 2,
    label: 'Center City',
    subLabel: 'High rise - High density',
    type: 'urban'
  },
  {
    value: 1,
    label: 'Urban City',
    subLabel: 'Low rise - High density',
    type: 'urban'

  },
  {
    value: 0,
    label: 'Suburban',
    subLabel: 'Low rise - Low density',
    type: 'suburban'
  }
]

export const Productos : Product[] = [
  {
    name: 'Duomo Kit.',
    subtitle: 'Cena excepcional para 3.',
    ingredients: [
      "1 Pasta Belmonte (Fetuccine o Fusilli).",
      "1 Salsa Belmonte (Tocineta ahumada o Cuatro Quesos o Napolitana)."
    ],
    img: DuomoProduct,
    message: "Hola Belmonte!!!, quiero un Duomo Kit - Cena excepcional para 3."
  },
  {
    name: 'Pantheon Kit.',
    subtitle: 'Cena excepcional para 6.',
    ingredients: [
      "2 Pasta Belmonte (Fetuccine o Fusilli).",
      "2 Salsa Belmonte (Tocineta ahumada o Cuatro Quesos o Napolitana)."
    ],
    img: PantheonProduct,
    message: "Hola Belmonte!!!, quiero un Pantheon Kit - Cena excepcional para 6."
  },
  {
    name: 'Milano Kit.',
    subtitle: 'Cena excepcional para 3.',
    ingredients: [
      "1 Raviolli Belmonte (Carne o Pollo).",
      "1 Salsa Belmonte (Tocineta ahumada o Cuatro Quesos o Napolitana)."
    ],
    img: MilanoProduct,
    message: "Hola Belmonte!!!, quiero un Milano Kit - Cena excepcional para 3."
  }
]

