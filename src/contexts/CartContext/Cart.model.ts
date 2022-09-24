export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  quantity: number;
}

export interface CartState {
  products: Product[];
  quantity: number;
  total: 0;
}
