import { Component, input, output } from '@angular/core';
import { Product } from '../../../../interfaces/product.interface';
import { PricePipe } from '../../../pipes/price.pipe';

@Component({
  selector: 'cart-list-products',
  standalone: true,
  imports: [ PricePipe ],
  templateUrl: './list-products-cart.component.html',
  styleUrl: './list-products-cart.component.css'
})
export class ListProductsCartComponent {
  public products = input.required<Product[]>();

  public removeItem = output<number>();

  public removeProductOnCart(id:number) : void{
    this.removeItem.emit(id)
  }


}
