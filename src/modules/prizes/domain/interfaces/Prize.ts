interface Laureates {
  id: string;
  firstname: string;
  surname: string;
  motivation: string;
  share: string;
}

export interface PrizeType {
  category: string;
  laureates?: Laureates[];
  year: string;
}
