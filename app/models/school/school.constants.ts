import type { School, SchoolName } from "~/models/school/school.types";

const SCHOOL_NAMES = [
  "vimeu",
  "epitech",
  "laval",
  "cloudNativeComputingFoundation",
  "google",
] as const;

const SCHOOLS: Record<SchoolName, School> = Object.freeze({
  vimeu: {
    name: "vimeu",
    city: "Friville-Escarbotin",
    country: "france",
    url: "https://lycee-vimeu-friville.ac-amiens.fr/",
  },
  epitech: {
    name: "epitech",
    city: "Lille",
    country: "france",
    url: "https://www.epitech.eu/",
    image: "epitech-logo.webp",
  },
  laval: {
    name: "laval",
    city: "Québec",
    country: "canada",
    url: "https://www.ulaval.ca/",
    image: "laval-logo.webp",
  },
  cloudNativeComputingFoundation: {
    name: "cloudNativeComputingFoundation",
    country: "usa",
    url: "https://www.cncf.io/",
    image: "cloud-native-computed-foundation-logo.webp",
  },
  google: {
    name: "google",
    country: "usa",
    url: "https://cloud.google.com/",
    image: "google-cloud-platform-logo.webp",
  },
});

export { SCHOOL_NAMES, SCHOOLS };