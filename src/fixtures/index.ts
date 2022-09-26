interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  defaultPriceId: string;
}

export const cartWithOneItem: Product[] = [
  {
    id: 'prod_MQxTDnXWkf5tzC',
    name: 'Camiseta Maratona Explorer 2.0',
    imageUrl: 'https://files.stripe.com/links/MDB8YWNjdF8xTGk1THNEUndhRlZNRGJMfGZsX3Rlc3RfQ0x3c21BREZNTU1EeDhrajdFelo5ZnBP00tJjmp91O',
    price: 74.9,
    description:
      'Gostosas como um abraço, nossos produtos são feitos do mais puro e nobre algodão brasileiro, ideais para climas de Norte a Sul. Todas as cores de camisetas e regatas são 100% algodão, exceto as cinzas-mescla, que são 88% algodão e 12% poliéster.',
    defaultPriceId: 'price_1Li5YuDRwaFVMDbLGPvUMl1y',
  },
  {
    id: 'prod_MQxTDnXWkf5tzD',
    name: 'Camiseta Maratona Explorer 2.0.1',
    imageUrl: 'https://files.stripe.com/links/MDB8YWNjdF8xTGk1THNEUndhRlZNRGJMfGZsX3Rlc3RfQ0x3c21BREZNTU1EeDhrajdFelo5ZnBP00tJjmp91O',
    price: 84.9,
    description:
      'Gostosas como um abraço, nossos produtos são feitos do mais puro e nobre algodão brasileiro, ideais para climas de Norte a Sul. Todas as cores de camisetas e regatas são 100% algodão, exceto as cinzas-mescla, que são 88% algodão e 12% poliéster.',
    defaultPriceId: 'price_1Li5YuDRwaFVMDbLGPvUMl1y',
  },
]
