import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { Product } from 'src/app/products/interfaces/Product/product';
import { ProductService } from 'src/app/products/services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-items',
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule, CommonModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ProductsListComponent  implements OnInit {

  products: Product[] = [];
  loading: boolean = true;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.loading = true;
    this.productService.getProducts().subscribe({
      next: (data) => {
        console.log('Productos recibidos:', data);
        this.products = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al cargar los productos:', err);
        this.loading = false;
      },
    });
  }

}
