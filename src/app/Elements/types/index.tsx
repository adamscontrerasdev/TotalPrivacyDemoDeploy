export interface Product {
  id: number;
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
  points: string[];
  details: boolean;
  video: string;
  problem: {
    title: string;
    content: string;
  };
  solution: {
    title: string;
    content: string;
  };
  features: {
    title: string;
    content: string;
    order: number;
    button: string;
  }[];
  personalNote: {
    img: string;
    note: string;
  };
  pricing: {
    title: string;
    price: number;
    currency: string;
    description: string;
    points: string[];
    textButton: string;
    redirectTo: string;
    payType: string[];
    icon: string[];
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
  SuccessCasesSection: {
    title: string;
    img: string;
    description: string;
  }[];
  finalCTA: {
    title: string;
    description: string;
    buttonText: string;
    startRate: string;
  };
}
