import { Injectable } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { products } from '../../data/data';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public listProducts:Product[] = [...products]

  constructor() { }


}
