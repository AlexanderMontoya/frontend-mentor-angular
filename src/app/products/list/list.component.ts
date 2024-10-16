import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../../interfaces/product.interface';
import { CartService } from '../services/cart.service';
import { products } from '../../data/data';
import { BtnToCartComponent } from './ui/btn-to-cart/btn-to-cart.component';

@Component({
  selector: 'products-list',
  standalone: true,
  imports: [BtnToCartComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  listLoader:boolean = true;

  constructor(
    public productsService:ProductsService,
    public cartService:CartService
  ){}

  ngOnInit(){

    setTimeout(()=>{
      this.listLoader = false
      this.productsService.listProducts = [...products]
    },900)
    
  }
  
  public getProducts() : Product[] {
    return this.productsService.listProducts
  }

  public inTheCart(id_product:number):boolean{
    const product = this.cartService.cartProducts.find(p=>p.id == id_product)
    if(product){
      return true
    }
    return false
  }
}
