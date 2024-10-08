import { Component } from '@angular/core';
import { ListComponent } from '../list/list.component';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ListComponent, CartComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
