import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'finishedPipe',
  pure: false,
})
export class FinishedPipe implements PipeTransform {
  transform(lists: any, state: boolean = true) {
    let listFinished: any = [];
    for (const list of lists) {
      if (!list.items) break;
      for (const item of list.items) {
        if (item.complete === state) listFinished.push(item);
      }
    }
    return listFinished;
  }
}
