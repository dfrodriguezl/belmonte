import { DuomoProduct, FetucciniProduct, FusilliProduct, LasagnaProduct, PantheonProduct, RavioliProduct, TotebagProduct, VeronaProduct } from "assets";

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
  tipo?: string;
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
    message: "Hola Belmonte!!!, quiero un Duomo Kit - Cena excepcional para 3.",
    tipo: "kit"
  },
  {
    name: 'Pantheon Kit.',
    subtitle: 'Cena excepcional para 6.',
    ingredients: [
      "2 Pasta Belmonte (Fetuccine o Fusilli).",
      "2 Salsa Belmonte (Tocineta ahumada o Cuatro Quesos o Napolitana)."
    ],
    img: PantheonProduct,
    message: "Hola Belmonte!!!, quiero un Pantheon Kit - Cena excepcional para 6.",
    tipo: "kit"
  },
  {
    name: 'Verona Kit.',
    subtitle: 'Cena para 2. edición limitada',
    ingredients: [
      "1 Raviolli Belmonte (Carne o Pollo).",
      "1 Salsa Champiñones Belmonte edición limitada."
    ],
    img: VeronaProduct,
    message: "Hola Belmonte!!!, quiero un Verona Kit - Cena excepcional para 2. edición limitada",
    tipo: "kit"
  },
  {
    name: 'Lasagna artesanal Belmonte 500g*',
    subtitle: '*Salsa no incluida',
    ingredients: ['*Salsa no incluida'],
    img: LasagnaProduct,
    message: "Hola Belmonte!!!, quiero un Lasagna artesanal Belmonte 500g"
  },
  {
    name: 'Fettucini Artesanal Belmonte 500g',
    subtitle: '*Salsa no incluida',
    ingredients: ['*Salsa no incluida'],
    img: FetucciniProduct,
    message: "Hola Belmonte!!!, quiero un Fettucini Artesanal Belmonte 500g"
  },
  {
    name: 'Fusilli Artesanal Belmonte 500g',
    subtitle: '*Salsa no incluida',
    ingredients: ['*Salsa no incluida'],
    img: FusilliProduct,
    message: "Hola Belmonte!!!, quiero un Fusilli Artesanal Belmonte 500g"
  },
  {
    name: 'Ravioli Artesanal Belmonte 250g (Carne o Pollo)',
    subtitle: '*Salsa no incluida',
    ingredients: ['*Salsa no incluida'],
    img: RavioliProduct,
    message: "Hola Belmonte!!!, quiero un Ravioli Artesanal Belmonte 250g (Carne o Pollo)"
  },
  {
    name: 'Totebag Belmonte',
    subtitle: '*Pasta no incluida',
    ingredients: ['*Pasta no incluida'],
    img: TotebagProduct,
    message: "Hola Belmonte!!!, quiero un Totebag Belmonte"
  }
]

