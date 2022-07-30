export interface Datum {
  id: number;
  name: string;
  icon: string;
}

export interface Category {
  message: string;
  data: Datum[];
}
