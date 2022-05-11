import { Pipe, PipeTransform } from '@angular/core';
import {Product} from "../../_model/product";

@Pipe({
  name: 'arraySplice',
  pure:false,
})
export class ArraySplicePipe implements PipeTransform {

  transform(value: Product[],filter:string): Product[] {
    let products:Product[] =[];
    for (let i = 0; i < value.length; i++) {
      if (value[i].productName.includes(filter) ) {
        products.push(value[i])
      }
    }
    return products;
  }
}
