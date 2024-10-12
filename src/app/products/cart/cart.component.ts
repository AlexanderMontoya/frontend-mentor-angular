import { Component, output } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../../interfaces/product.interface';
import { JsonPipe } from '@angular/common';
import { PricePipe } from '../pipes/price.pipe';
import { ProductsService } from '../services/products.service';
import { ListProductsCartComponent } from './ui/list-products-cart/list-products-cart.component';

@Component({
  selector: 'products-cart',
  standalone: true,
  imports: [JsonPipe, PricePipe, ListProductsCartComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  public confirmOrder = output<boolean>()

  constructor(
    public cartService:CartService,
    public productsService:ProductsService
  ){}

  public getCart():Product[]{
    return this.cartService.cartProducts
  }

  public getTotalCart():number{
    const orderTotal = this.cartService.cartProducts.reduce((sum, item) => sum + (item.quantity * item.price), 0);
    return orderTotal
  }

  public remove(id_product:number):void{
    const itemProduct = this.productsService.listProducts.find(p=>p.id == id_product);
    const itemCart = this.cartService.cartProducts.find(p=>p.id == id_product)
    
    if(itemProduct && itemCart){
      itemProduct.quantity += itemCart.quantity
    }

    this.cartService.removeProductToCart(id_product)
  }
  
  public confirmOrderCart(){
    this.confirmOrder.emit(true)
  }
}
