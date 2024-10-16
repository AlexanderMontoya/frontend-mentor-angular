import { Injectable } from '@angular/core';
import { Product } from '../../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartProducts:Product[] = []

  constructor() { }

  public addProductToCart(product:Product):void{

    const productInCart = this.cartProducts.findIndex(p=> p.id == product.id)

    if( productInCart === -1 ){
      const itemProduct : Product = {
        id: product.id,
        name: product.name,
        category: product.category,
        image: product.image,
        price: product.price,
        quantity: 1
      }

      this.cartProducts.unshift(itemProduct)

      return
    }

    this.cartProducts[productInCart].quantity += 1

    
  }

  public subtractToCart(id_product:number):void{
    const itemProduct = this.cartProducts.findIndex(p=>p.id === id_product)
    if(itemProduct != -1){

      this.cartProducts[itemProduct].quantity -= 1

      if(this.cartProducts[itemProduct].quantity == 0){
        this.removeProductToCart(id_product)
      }
      
    }
    
  }

  public removeProductToCart(id_product:number):void{
    const itemxCart = this.cartProducts.findIndex(p=>p.id == id_product)

    this.cartProducts.splice(itemxCart, 1)
  }
  
}
