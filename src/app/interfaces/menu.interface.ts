export interface Datum {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}

export interface Food {
  message: string;
  data: Datum[];
}
