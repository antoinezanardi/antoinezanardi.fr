enum SCHOOL_NAMES {
  VIMEU = "vimeu",
  EPITECH = "epitech",
  LAVAL = "laval",
  CLOUD_NATIVE_COMPUTED_FOUNDATION = "cloudNativeComputedFoundation",
}

interface School {
  name: SCHOOL_NAMES;
  translatedName?: string;
  city?: string;
  image?: string;
  url: string;
}

const schools: Record<SCHOOL_NAMES, School> = {
  [SCHOOL_NAMES.VIMEU]: {
    name: SCHOOL_NAMES.VIMEU,
    city: "Friville-Escarbotin",
    url: "https://lycee-vimeu-friville.ac-amiens.fr/",
  },
  [SCHOOL_NAMES.EPITECH]: {
    name: SCHOOL_NAMES.EPITECH,
    city: "Lille",
    url: "https://www.epitech.eu/",
    image: "sobook-logo.png",
  },
  [SCHOOL_NAMES.LAVAL]: {
    name: SCHOOL_NAMES.LAVAL,
    city: "Québec",
    url: "https://www.ulaval.ca/",
    image: "daveo-logo.png",
  },
  [SCHOOL_NAMES.CLOUD_NATIVE_COMPUTED_FOUNDATION]: {
    name: SCHOOL_NAMES.CLOUD_NATIVE_COMPUTED_FOUNDATION,
    url: "https://www.cncf.io/",
    image: "cloud-native-computed-foundation-logo.png",
  },
};

export type { School };

export { SCHOOL_NAMES, schools };