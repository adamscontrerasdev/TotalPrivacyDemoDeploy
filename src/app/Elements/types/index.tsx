interface Testimonio {
  name: string;
  testimonio: string;
}

interface Problem {
  title: string;
  content: string;
}

interface Solution {
  title: string;
  content: string;
}

interface Features {
  title: string;
  content: string;
  order: number;
  button: string;
}

interface PersonalNote {
  img: string;
  note: string;
}

interface Pricing {
  title: string;
  price: number;
  currency: string;
  description: string;
  points: string[];
  textButton: string;
  redirectTo: string;
  payType: string[];
  icon: string[];
}

interface FAQ {
  question: string;
  answer: string;
}

interface SuccessCasesSection {
  title: string;
  img: string;
  description: string;
}

interface FinalCTA {
  title: string;
  description: string;
  buttonText: string;
  startRate: string;
}

export interface Product {
  id: number;
  icon: string;
  key: string;
  title: string;
  price: number;
  currency: string;
  Bg: string;
  description: string;
  before: boolean;
  order: number;
  Destacado: boolean;
  cardPay: string;
  proximamente: boolean;
  testimonios?: Testimonio[];
  points: string[];
  details: boolean;
  video: string;
  problem?: Problem;
  solution?: Solution;
  features: Features[];
  personalNote: PersonalNote;
  pricing: Pricing[];
  faq: FAQ[];
  SuccessCasesSection: SuccessCasesSection[];
  finalCTA: FinalCTA;
}
