import { Categorie } from './categorie';

export type Product = {
  id: number,
  name: string,
  price: number,
  imgUrl: string,
  date: string,
  description: string,
  categories: Categorie[];
};
