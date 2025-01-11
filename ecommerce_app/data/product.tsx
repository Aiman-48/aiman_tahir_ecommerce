export interface Product {
    image: string;
    title: string;
    price: number;
    originalPrice?: number;
    discount?: number;
    category?:string;
    quantity?:number;
    colorOptions?: string[];
  }
  export interface Review {
    rating: number;
    customerName: string;
    review: string;

  }
  
  export const products: Product[] = [
    {
      image: './green girl.png',
      title: 'Graphic Design',
      price: 6.48,
      originalPrice: 16.48,
      category: 'English Department',
      quantity: 1,
      colorOptions: ['blue', 'green', 'brown', 'black'],
    },
    {
      image: './Frame2.png',
      title: 'Graphic Design',
      price: 6.48,
      originalPrice: 16.48,
      category: 'English Department',
      quantity: 1,
      colorOptions: ['blue', 'green', 'brown', 'black'],
    },
    {
      image: './Frame3.png',
      title: 'Graphic Design',
      price: 6.48,
      originalPrice: 16.48,
      category: 'English Department',
      quantity: 1,
      colorOptions: ['blue', 'green', 'brown', 'black'],
    },
    {
      image: './Frame4.png',
      title: 'Graphic Design',
      price: 6.48,
      originalPrice: 16.48,
      category: 'English Department',
      quantity: 1,
      colorOptions: ['blue', 'green', 'brown', 'black'],
    },
    {
      image: './Frame5.png',
      title: 'Graphic Design',
      price: 6.48,
      originalPrice: 16.48,
      category: 'English Department',
      quantity: 1,
      colorOptions: ['blue', 'green', 'brown', 'black'],
    },
    {
      image: './Frame6.png',
      title: 'Graphic Design',
      price: 6.48,
      originalPrice: 16.48,
      category: 'English Department',
      quantity: 1,
      colorOptions: ['blue', 'green', 'brown', 'black'],
    },
    {
      image: './Frame7.png',
      title: 'Graphic Design',
      price: 6.48,
      originalPrice: 16.48,
      category: 'English Department',
      quantity: 1,
      colorOptions: ['blue', 'green', 'brown', 'black'],
    },
    {
      image: './Frame8.png',
      title: 'Graphic Design',
      price: 6.48,
      originalPrice: 16.48,
      category: 'English Department',
      quantity: 1,
      colorOptions: ['blue', 'green', 'brown', 'black'],
    },
  ];
  

  


  


  export const dressStyleData = [
    {
      name: 'MEN',
      backgroundImage: './men.png',
      // Square card with rounded corners
    },
    {
      name: 'WOMEN',
      backgroundImage: './women.png',
       // Rectangular card
    },
    {
      name: 'ACESSORIES',
      backgroundImage: './acessories.png ',
       // Rectangular card
    },
    {
      name: 'KIDS',
      backgroundImage: './kids.png',
     // Square card with rounded corners
    },
  ];
  