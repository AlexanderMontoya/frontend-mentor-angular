import { Component } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { Product } from '../../../../interfaces/product.interface';
import { PricePipe } from '../../../pipes/price.pipe';

@Component({
  selector: 'list-order',
  standalone: true,
  imports: [PricePipe],
  templateUrl: './list-order.component.html',
  styleUrl: './list-order.component.css'
})
export class ListOrderComponent {
  constructor(private cartService:CartService){}

  public getOrder():Product[]{
    return this.cartService.cartProducts
  }

  public getTotalCart():number{
    const orderTotal = this.cartService.cartProducts.reduce((sum, item) => sum + (item.quantity * item.price), 0);
    return orderTotal
  }

}
