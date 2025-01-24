export interface Product {
  id:number;
    image: string;
    title: string;
    price: number;
    originalPrice?: number;
    discount?: number;
    category?:string;
    quantity?:number;
    colorOptions?: string[];
    description:string
  }
  export interface Review {
    rating: number;
    customerName: string;
    review: string;

  }
  
  export const products: Product[] = [
    {
      id: 1,
      image: './green girl.png',
      title: 'Graphic Design',
      price: 6.48,
      originalPrice: 16.48,
      category: 'English Department',
      quantity: 1,
      colorOptions: ['blue', 'green', 'brown', 'black'],
      description:"this is high quality product "
    },
    {
      id: 2,
      image: './Frame2.png',
      title: 'Graphic Design',
      price: 6.48,
      originalPrice: 16.48,
      category: 'English Department',
      quantity: 1,
      colorOptions: ['blue', 'green', 'brown', 'black'],
        description:"this is high quality product "
    },
    {
      id: 3,
      image: './Frame3.png',
      title: 'Graphic Design',
      price: 6.48,
      originalPrice: 16.48,
      category: 'English Department',
      quantity: 1,
      colorOptions: ['blue', 'green', 'brown', 'black'],
        description:"this is high quality product "
    },
    {
      id: 4,
      image: './Frame4.png',
      title: 'Graphic Design',
      price: 6.48,
      originalPrice: 16.48,
      category: 'English Department',
      quantity: 1,
      colorOptions: ['blue', 'green', 'brown', 'black'],
        description:"this is high quality product "
    },
    {
      id: 5,
      image: './Frame5.png',
      title: 'Graphic Design',
      price: 6.48,
      originalPrice: 16.48,
      category: 'English Department',
      quantity: 1,
      colorOptions: ['blue', 'green', 'brown', 'black'],
        description:"this is high quality product "
    },
    {
      id: 6,
      image: './Frame6.png',
      title: 'Graphic Design',
      price: 6.48,
      originalPrice: 16.48,
      category: 'English Department',
      quantity: 1,
      colorOptions: ['blue', 'green', 'brown', 'black'],
        description:"this is high quality product "
    },
    {
      id: 7,
      image: './Frame7.png',
      title: 'Graphic Design',
      price: 6.48,
      originalPrice: 16.48,
      category: 'English Department',
      quantity: 1,
      colorOptions: ['blue', 'green', 'brown', 'black'],
      description:"this is high quality product "

    },
    {
      id: 8,
      image: './Frame8.png',
      title: 'Graphic Design',
      price: 6.48,
      originalPrice: 16.48,
      category: 'English Department',
      quantity: 1,
      colorOptions: ['blue', 'green', 'brown', 'black'],
      description:"this is high quality product "
    },
  ];
  

  


  


  export const dressStyleData = [
    {
      name: 'MEN',
      backgroundImage: '../men.png',
      // Square card with rounded corners
    },
    {
      name: 'WOMEN',
      backgroundImage: '../women.png',
       // Rectangular card
    },
    {
      name: 'ACESSORIES',
      backgroundImage: '../acessories.png ',
       // Rectangular card
    },
    {
      name: 'KIDS',
      backgroundImage: '../kids.png',
     // Square card with rounded corners
    },
  ];
  