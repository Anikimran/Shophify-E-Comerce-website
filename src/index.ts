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
  quantity?: number;
}
export type props = {
  item: productType;
};
export interface stateType {
  shopy: {
    cart: productType[];
    favorite: productType[];
    userInfo: any;
  };
}
