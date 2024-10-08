import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'products-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  constructor(public productsService:ProductsService){}
  
}
