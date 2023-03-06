export type Job = {
  _id: string;
  title: string;
  location: string;
  salary: string;
  description: string;
  slug: {
    current: string;
  };
};

export interface Property {
  id: number;
  icon: string;
  title: string;
  text: string;
  property: [];
}
