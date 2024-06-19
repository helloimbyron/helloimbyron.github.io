export interface CV {
  awards: Array<Awards> | null;
  basics: Basics;
  certificates: Array<Certificates> | null;
  education: Array<Education>;
  interests: Array<Interests> | null;
  languages: Array<Languages>;
  projects: Array<Projects> | null;
  publications: Array<Publications> | null;
  references: Array<References> | null;
  skills: Array<Skills>;
  volunteer: Array<Volunteer> | null;
  work: Array<Work> | null;
}

interface Awards {
  awarder: string;
  date: string;
  summary: string;
  title: string;
}

interface Basics {
  email: string | null;
  image: string | null;
  label: string;
  location: Location;
  name: string;
  phone: string | null;
  profiles: Array<Profiles>;
  summary: string;
  url: string | null;
}

interface Location {
  address: string | null;
  city: string;
  countryCode: string;
  postalCode: string | null;
  region: string;
}

interface Profiles {
  network: string;
  url: string;
  username: string;
}

interface Certificates {
  date: DateStr;
  endDate: DateStr;
  highlights: Highlight | null;
  issuer: string;
  name: string;
  score: string | null;
  startDate: DateStr | null;
  summary: string;
  url: string;
}

interface Education {
  area: string;
  courses: Array<string> | null;
  endDate: DateStr | null;
  highlights: Highlight | null;
  institution: string;
  score: string | null;
  startDate: DateStr;
  studyType: string;
  summary: string;
  url: string;
}

interface Interests {
  keywords: Array<string>;
  name: string;
}

interface Languages {
  fluency: string;
  language: Language;
}

interface Projects {
  description: string;
  github?: string | null;
  highlights: Highlight | null;
  isActive: boolean;
  name: string;
  url: string | null;
}

interface Publications {
  name: string;
  publisher: string;
  releaseDate: DateStr;
  summary: string;
  url: string;
}

interface References {
  name: string;
  reference: string;
}

interface Skills {
  key: string;
  keywords: Array<string> | null;
  level: string | null;
  name: string;
}

interface Volunteer {
  endDate: DateStr | null;
  highlights: Highlight | null;
  organization: string;
  position: string;
  startDate: DateStr;
  summary: string;
  url: string;
}

interface Work {
  endDate: DateStr | null;
  highlights: Highlight | null;
  name: string;
  position: string;
  startDate: DateStr;
  summary: string;
  url: string;
}

type DateStr = `${string}-${string}-${string}`;

type Highlight = Array<String>;

type Language =
  | "Arabic"
  | "Bengali"
  | "Chinese"
  | "Dutch"
  | "English"
  | "Finnish"
  | "France"
  | "German"
  | "Hindi"
  | "Italian"
  | "Korean"
  | "Portuguese"
  | "Russian"
  | "Spanish"
  | "Turkish"
  | string;
