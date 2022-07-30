export interface Datum {
  id: number;
  name: string;
  icon: string;
}

export interface Cretory {
  message: string;
  data: Datum[];
}
