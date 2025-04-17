import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Laptop Pro X',
      price: 1299.99,
      description: 'A high-performance laptop with 16GB RAM, 512GB SSD, and a 14-inch Retina display.',
      category: 'Electronics',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Smartphone Ultra',
      price: 899.99,
      description: 'The latest smartphone with a 6.7-inch AMOLED display, 128GB storage, and triple camera system.',
      category: 'Electronics',
      rating: 4.5
    },
    {
      id: 3,
      name: 'Wireless Headphones',
      price: 149.99,
      description: 'Premium wireless headphones with noise cancellation, 30-hour battery life, and superior sound quality.',
      category: 'Accessories',
      rating: 4.7
    }
  ];

  getProducts(): Observable<Product[]> {
    console.log('Returning products:', this.products);
    return of(this.products);
  }

  getProductById(id: number): Observable<Product | undefined> {
    return of(this.products.find(product => product.id === id));
  }
}