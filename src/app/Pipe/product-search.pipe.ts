import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/Product.model';

@Pipe({
  name: 'productSearch'
})
export class ProductSearchPipe implements PipeTransform {

  transform(products: Product[], searchText: string): any[] {
    if (!products || !searchText) {return products};
    return products.filter(product => {
        return product.productName.toLowerCase().includes(searchText.toLocaleLowerCase());
    });
}
}
