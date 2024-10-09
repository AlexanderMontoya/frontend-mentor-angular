import { Injectable } from '@angular/core';
import { Product } from '../../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartProducts:Product[] = [ { "id": 233, "name": "Classic Tiramisu", "category": "Tiramisu", "image": { "thumbnail": "./assets/images/image-tiramisu-thumbnail.jpg", "mobile": "./assets/images/image-tiramisu-mobile.jpg", "tablet": "./assets/images/image-tiramisu-tablet.jpg", "desktop": "./assets/images/image-tiramisu-desktop.jpg" }, "price": 5.5, "quantity": 1 }, { "id": 232, "name": "Macaron Mix of Five", "category": "Macaron", "image": { "thumbnail": "./assets/images/image-macaron-thumbnail.jpg", "mobile": "./assets/images/image-macaron-mobile.jpg", "tablet": "./assets/images/image-macaron-tablet.jpg", "desktop": "./assets/images/image-macaron-desktop.jpg" }, "price": 8, "quantity": 1 }, { "id": 230, "name": "Waffle with Berries", "category": "Waffle", "image": { "thumbnail": "./assets/images/image-waffle-thumbnail.jpg", "mobile": "./assets/images/image-waffle-mobile.jpg", "tablet": "./assets/images/image-waffle-tablet.jpg", "desktop": "./assets/images/image-waffle-desktop.jpg" }, "price": 6.5, "quantity": 1 }, { "id": 231, "name": "Vanilla Bean Crème Brûlée", "category": "Crème Brûlée", "image": { "thumbnail": "./assets/images/image-creme-brulee-thumbnail.jpg", "mobile": "./assets/images/image-creme-brulee-mobile.jpg", "tablet": "./assets/images/image-creme-brulee-tablet.jpg", "desktop": "./assets/images/image-creme-brulee-desktop.jpg" }, "price": 7, "quantity": 1 } ]

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
    const itemProduct = this.cartProducts.findIndex(p=>p.id == id_product)
    if(itemProduct != -1){

      this.cartProducts[itemProduct].quantity -= 1

      if(this.cartProducts[itemProduct].quantity == 0){
        this.removeProductToCart(itemProduct)
      }
      
    }
    
  }

  public removeProductToCart(index_product:number):void{
    this.cartProducts.splice(index_product, 1)
  }
  
}
