import { Component, input } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { Product } from '../../../../interfaces/product.interface';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'button-to-cart',
  standalone: true,
  imports: [],
  templateUrl: './btn-to-cart.component.html',
  styleUrl: './btn-to-cart.component.css'
})
export class BtnToCartComponent {

  public product = input.required<Product>();

  constructor(public cartService:CartService, public productsService:ProductsService){}

  public inTheCart(id_product:number):boolean{
    const product = this.cartService.cartProducts.find(p=>p.id == id_product)
    if(product){
      return true
    }
    return false
  }
  public addToCart(id_product:number) : void{
    const itemProduct = this.productsService.subtractProduct(id_product)

    this.cartService.addProductToCart(itemProduct)
  }
  public subtractToCart(id_product:number) : void{
    this.cartService.subtractToCart(id_product)
  }

  public quantityInTheCart(id_product:number):number{
    const product = this.cartService.cartProducts.find(p=>p.id == id_product)
    if(product){
      return product.quantity
    }
    return 0
  }
}
