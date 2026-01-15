export interface productType {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  images: string[];
  discountPercentage: number;
  rating: number;
  stock: number;
}
export type props = {
  item: productType;
};
