import { Pipe, PipeTransform } from '@angular/core';
import { List } from "../../app/classes/lists";
@Pipe({
  name: 'pendingPipe',
  pure: false,
})
export class PendingPipe implements PipeTransform {

  transform(lists: List[], state: boolean = false): List[] {
    let newList: List[] = [];
    for (const list of lists) {
      if (list.finished === state) {
        newList.push(list);
      }
    }
    return newList;
  }
}
