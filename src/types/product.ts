export interface IAProduct {
  _id: string;
  id: string;
  category: string;
  name: string;
  seller: string;
  price: number;
  stock: number;
  ratings: number;
  ratingsCount: number;
  img: string;
  shipping: number;
  quantity: number;
  description?: string;
}
