export interface CreateProductDto {
    productName: string;
    categoryId: number;
    price: number;
    stock: number;
    image: File;
  }