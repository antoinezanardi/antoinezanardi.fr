import { Countries } from "~/models/Country";

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
  country: Countries;
  image?: string;
  url: string;
};

const SCHOOLS: Record<SchoolNames, School> = {
  [SchoolNames.VIMEU]: {
    name: SchoolNames.VIMEU,
    city: "Friville-Escarbotin",
    country: Countries.FRANCE,
    url: "https://lycee-vimeu-friville.ac-amiens.fr/",
  },
  [SchoolNames.EPITECH]: {
    name: SchoolNames.EPITECH,
    city: "Lille",
    country: Countries.FRANCE,
    url: "https://www.epitech.eu/",
    image: "epitech-logo.png",
  },
  [SchoolNames.LAVAL]: {
    name: SchoolNames.LAVAL,
    city: "Québec",
    country: Countries.CANADA,
    url: "https://www.ulaval.ca/",
    image: "laval-logo.png",
  },
  [SchoolNames.CLOUD_NATIVE_COMPUTING_FOUNDATION]: {
    name: SchoolNames.CLOUD_NATIVE_COMPUTING_FOUNDATION,
    country: Countries.USA,
    url: "https://www.cncf.io/",
    image: "cloud-native-computed-foundation-logo.png",
  },
  [SchoolNames.GOOGLE]: {
    name: SchoolNames.GOOGLE,
    country: Countries.USA,
    url: "https://cloud.google.com/",
    image: "google-cloud-platform-logo.png",
  },
};

export type { School };

export { SchoolNames, SCHOOLS };