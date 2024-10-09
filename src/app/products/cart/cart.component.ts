import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../../interfaces/product.interface';
import { JsonPipe } from '@angular/common';
import { PricePipe } from '../pipes/price.pipe';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'products-cart',
  standalone: true,
  imports: [JsonPipe, PricePipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  constructor(
    public cartService:CartService,
    public productsService:ProductsService
  ){}

  public getCart():Product[]{
    return this.cartService.cartProducts
  }

  public remove(index_product:number, product:Product):void{
    const itemProduct = this.productsService.listProducts.find(p=>p.id == product.id);
    
    if(itemProduct){
      itemProduct.quantity += product.quantity
    }

    this.cartService.removeProductToCart(index_product)
  }

}
