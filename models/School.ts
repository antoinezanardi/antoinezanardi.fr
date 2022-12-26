import { COUNTRIES } from "~/models/Country";

enum SCHOOL_NAMES {
  VIMEU = "vimeu",
  EPITECH = "epitech",
  LAVAL = "laval",
  CLOUD_NATIVE_COMPUTED_FOUNDATION = "cloudNativeComputedFoundation",
  GOOGLE = "google",
}

interface School {
  name: SCHOOL_NAMES;
  translatedName?: string;
  city?: string;
  country: COUNTRIES;
  image?: string;
  url: string;
}

const schools: Record<SCHOOL_NAMES, School> = {
  [SCHOOL_NAMES.VIMEU]: {
    name: SCHOOL_NAMES.VIMEU,
    city: "Friville-Escarbotin",
    country: COUNTRIES.FRANCE,
    url: "https://lycee-vimeu-friville.ac-amiens.fr/",
  },
  [SCHOOL_NAMES.EPITECH]: {
    name: SCHOOL_NAMES.EPITECH,
    city: "Lille",
    country: COUNTRIES.FRANCE,
    url: "https://www.epitech.eu/",
    image: "epitech-logo.png",
  },
  [SCHOOL_NAMES.LAVAL]: {
    name: SCHOOL_NAMES.LAVAL,
    city: "Québec",
    country: COUNTRIES.CANADA,
    url: "https://www.ulaval.ca/",
    image: "laval-logo.png",
  },
  [SCHOOL_NAMES.CLOUD_NATIVE_COMPUTED_FOUNDATION]: {
    name: SCHOOL_NAMES.CLOUD_NATIVE_COMPUTED_FOUNDATION,
    country: COUNTRIES.USA,
    url: "https://www.cncf.io/",
    image: "cloud-native-computed-foundation-logo.png",
  },
  [SCHOOL_NAMES.GOOGLE]: {
    name: SCHOOL_NAMES.GOOGLE,
    country: COUNTRIES.USA,
    url: "https://cloud.google.com/",
    image: "google-cloud-platform-logo.png",
  },
};

export type { School };

export { SCHOOL_NAMES, schools };