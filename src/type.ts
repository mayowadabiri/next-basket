export interface IProductCard {
  title: string;
  images: string[];
  category: string;
  price: number;
  discountPercentage: number;
  discountPrice: string;
  image: string;
  id: string;
}

export interface IResult {
  limit: string;
  products: IProductCard[];
  skip: number;
  total: number;
}

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  quantity: number;
}
