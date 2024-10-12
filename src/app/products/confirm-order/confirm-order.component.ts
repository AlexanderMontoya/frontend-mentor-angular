import { Component, output, Renderer2 } from '@angular/core';
import { PricePipe } from '../pipes/price.pipe';
import { ListOrderComponent } from './ui/list-order/list-order.component';

@Component({
  selector: 'products-confirm-order',
  standalone: true,
  imports: [ListOrderComponent],
  templateUrl: './confirm-order.component.html',
  styleUrl: './confirm-order.component.css'
})
export class ConfirmOrderComponent {

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'order-confirmed');
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'order-confirmed');
  }

  public newOrder = output<boolean>()

  public startNewOrder(){
    this.newOrder.emit(true)
  }
}
