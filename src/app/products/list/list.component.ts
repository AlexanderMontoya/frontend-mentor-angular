import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../../interfaces/product.interface';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'products-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  constructor(
    public productsService:ProductsService,
    public cartService:CartService
  ){}
  
  public getProducts() : Product[] {
    return this.productsService.listProducts
  }

  

  public addToCart(id_product:number) : void{
    const itemProduct = this.productsService.subtractProduct(id_product)

    this.cartService.addProductToCart(itemProduct)
  }
  public subtractToCart(id_product:number) : void{
    this.cartService.subtractToCart(id_product)
  }

  public inTheCart(id_product:number):boolean{
    const product = this.cartService.cartProducts.find(p=>p.id == id_product)
    if(product){
      return true
    }
    return false
  }

  public quantityInTheCart(id_product:number):number{
    const product = this.cartService.cartProducts.find(p=>p.id == id_product)
    if(product){
      return product.quantity
    }
    return 0
  }

}
