import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/Product/product';
import { CreateProductDto } from '../interfaces/Product/create-product-dto';
import { UpdateProductDto } from '../interfaces/Product/update-product-dto';

@Injectable({
  providedIn: 'root'
})

/// Servicio para manejar los productos

export class ProductService {

  // Inyectar el servicio HttpClient
  private readonly http = inject(HttpClient);
  
  // URL de la API
  private readonly baseUrl = environment.apiUrl;

  // Obtener todos los productos
  getProducts(filter?: any): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl); 
  }

  // Crear un nuevo producto 
  createProduct(productDto: CreateProductDto): Observable<Product> {
    // Crear un objeto FormData para enviar la imagen
    const formData = new FormData();

    // Agregar los datos del producto al FormData
    formData.append('productName', productDto.productName);
    formData.append('categoryId', productDto.categoryId.toString());
    formData.append('price', productDto.price.toString());
    formData.append('stock', productDto.stock.toString());
    formData.append('image', productDto.image);

    // Enviar la petición POST
    return this.http.post<Product>(this.baseUrl, formData);
  }

  // Actualizar un producto existente
  updateProduct(productId: number, productDto: UpdateProductDto): Observable<Product> {
    // Crear un objeto FormData para enviar la imagen
    const formData = new FormData();

    // Agregar los datos del producto al FormData en caso de que se hayan proporcionado
    if (productDto.productName) formData.append('productName', productDto.productName);
    if (productDto.categoryId !== undefined) formData.append('categoryId', productDto.categoryId.toString());
    if (productDto.price !== undefined) formData.append('price', productDto.price.toString());
    if (productDto.stock !== undefined) formData.append('stock', productDto.stock.toString());
    if (productDto.image) formData.append('image', productDto.image);

    // Enviar la petición PUT
    return this.http.put<Product>(`${this.baseUrl}/${productId}`, formData);
  }

  // Eliminar un producto
  deleteProduct(productId: number): Observable<void> {
    // Enviar la petición DELETE
    return this.http.delete<void>(`${this.baseUrl}/${productId}`);
  }
  
}
