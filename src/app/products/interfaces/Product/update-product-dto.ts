export interface UpdateProductDto {
    productName?: string;
    categoryId?: number;
    price?: number;
    stock?: number;
    image?: File;
  }