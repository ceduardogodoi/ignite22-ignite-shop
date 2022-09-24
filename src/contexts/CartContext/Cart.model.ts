export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
}

export interface CartState {
  products: Product[];
  quantity: number;
  total: 0;
}
