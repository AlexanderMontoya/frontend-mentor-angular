import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
  standalone: true
})
export class PricePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    const price = "$"+ value.toFixed(2)

    return price;
  }

}
