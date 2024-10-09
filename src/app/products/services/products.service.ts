import { Injectable } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { products } from '../../data/data';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public listProducts:Product[] = [...products]

  constructor() { }

  public subtractProduct(id:number):Product{
    const indexProduct = this.listProducts.findIndex(p=>p.id === id)

    this.listProducts[indexProduct].quantity -= 1

    return this.listProducts[indexProduct]
  }

}
