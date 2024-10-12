import { Component } from '@angular/core';
import { ListComponent } from '../list/list.component';
import { CartComponent } from '../cart/cart.component';
import { Product } from '../../interfaces/product.interface';
import { ConfirmOrderComponent } from '../confirm-order/confirm-order.component';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ListComponent, CartComponent, ConfirmOrderComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  public confirmOrder:boolean = false

  constructor(private cartService:CartService){}

  public confirmOrderOnCart($event:boolean){
    this.confirmOrder = $event

    console.log(this.confirmOrder);
  }

  public startNewOrder(){
    this.confirmOrder = false
    this.cartService.cartProducts = []
  }

}
