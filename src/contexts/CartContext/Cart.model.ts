export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
}

export interface CartProduct extends Product {
  quantity: number;
}

export interface CartState {
  products: CartProduct[];
  quantity: number;
  total: 0;
}
