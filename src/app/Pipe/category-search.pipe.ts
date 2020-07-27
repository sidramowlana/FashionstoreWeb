import { Pipe, PipeTransform } from '@angular/core';
import { Tag } from '../models/Tag.model';

@Pipe({
  name: 'categorySearch'
})
export class CategorySearchPipe implements PipeTransform {

  transform(tags: Tag[], searchText: string): any[] {
    if (!tags || !searchText) {return tags};
    return tags.filter(tag => {
        return tag.tag.toLowerCase().includes(searchText.toLocaleLowerCase());
    });
  }

}
