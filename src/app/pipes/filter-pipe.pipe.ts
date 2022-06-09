import { Pipe, PipeTransform } from '@angular/core';
import Entry from '../models/Entry';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(list: Entry[], filter: string) : Entry[] {
    if (filter == 'done') {
      return list.filter(e => e.done === true);
    } else if (filter === 'notDone') {
      return list.filter(e => e.done === false);
    } else {
      return list;
    }
  }
}
