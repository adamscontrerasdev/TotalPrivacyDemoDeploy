export interface Testimonio {
  name?: string;
  testimonio?: string;
  img?: string;
}

export interface Points {
  icon?: string;
  point?: string;
}

export interface Problem {
  title?: string;
  content?: string;
}

export interface Solution {
  title?: string;
  content?: string;
}

export interface Features {
  title?: string;
  content?: string;
  order?: number;
  button?: string;
}

export interface PersonalNote {
  img?: string;
  note?: string;
}

export interface Pricing {
  title?: string;
  price?: number;
  currency?: string;
  description?: string;
  points?: string[];
  textButton?: string;
  redirectTo?: string;
  payType?: string[];
  icon?: string[];
}

export interface FAQ {
  question?: string;
  answer?: string;
}

export interface SuccessCasesSection {
  title?: string;
  img?: string;
  description?: string;
}

export interface FinalCTA {
  title?: string;
  description?: string;
  buttonText?: string;
  startRate?: string;
}

export interface Product {
  id?: number;
  icon?: string;
  key?: string;
  title?: string;
  price?: number;
  bgColor: string;
  currency?: string;
  Bg?: string;
  description?: string;
  before?: boolean;
  order?: number;
  Destacado?: boolean;
  cardPay?: string;
  proximamente?: boolean;
  testimonios?: Testimonio[];
  points?: Points[];
  details?: boolean;
  video?: string;
  poster?: string;
  problem?: Problem;
  solution?: Solution;
  features?: Features[];
  personalNote?: PersonalNote;
  pricing?: Pricing[];
  faq?: FAQ[];
  SuccessCasesSection?: SuccessCasesSection[];
  finalCTA?: FinalCTA;
}
