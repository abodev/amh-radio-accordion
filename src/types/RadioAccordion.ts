export interface Options {
  value: string;
  title: string;
  subtitle?: string;
  subOptions?: Suboption[];
  active?: boolean;
}

export interface Suboption {
  title: string;
  link?: string;
}
