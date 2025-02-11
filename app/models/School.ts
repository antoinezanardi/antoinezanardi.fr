import type { Country } from "~/models/country/country.types";

enum SchoolNames {
  VIMEU = "vimeu",
  EPITECH = "epitech",
  LAVAL = "laval",
  CLOUD_NATIVE_COMPUTING_FOUNDATION = "cloudNativeComputingFoundation",
  GOOGLE = "google",
}

type School = {
  name: SchoolNames;
  translatedName?: string;
  city?: string;
  country: Country;
  image?: string;
  url: string;
};

const SCHOOLS: Record<SchoolNames, School> = {
  [SchoolNames.VIMEU]: {
    name: SchoolNames.VIMEU,
    city: "Friville-Escarbotin",
    country: "france",
    url: "https://lycee-vimeu-friville.ac-amiens.fr/",
  },
  [SchoolNames.EPITECH]: {
    name: SchoolNames.EPITECH,
    city: "Lille",
    country: "france",
    url: "https://www.epitech.eu/",
    image: "epitech-logo.png",
  },
  [SchoolNames.LAVAL]: {
    name: SchoolNames.LAVAL,
    city: "Québec",
    country: "canada",
    url: "https://www.ulaval.ca/",
    image: "laval-logo.png",
  },
  [SchoolNames.CLOUD_NATIVE_COMPUTING_FOUNDATION]: {
    name: SchoolNames.CLOUD_NATIVE_COMPUTING_FOUNDATION,
    country: "usa",
    url: "https://www.cncf.io/",
    image: "cloud-native-computed-foundation-logo.png",
  },
  [SchoolNames.GOOGLE]: {
    name: SchoolNames.GOOGLE,
    country: "usa",
    url: "https://cloud.google.com/",
    image: "google-cloud-platform-logo.png",
  },
};

export type { School };

export { SchoolNames, SCHOOLS };