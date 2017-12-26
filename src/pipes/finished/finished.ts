import { Pipe, PipeTransform } from '@angular/core';
import { List } from "../../app/classes/lists";
@Pipe({
  name: 'finishedPipe',
  pure: false,
})
export class FinishedPipe implements PipeTransform {
  transform(lists: List[], state: boolean = true): List[] {
    let listFinished: List[] = [];
    for (const list of lists) {
      if (list.finished === state) {
        listFinished.push(list);
      }
    }
    return listFinished;
  }
}
