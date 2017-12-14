import { ListItem } from './list-item';

export class List {
  name: string;
  complete: boolean;
  items: ListItem[];

  constructor( name: string) {
    this.name = name;
    this.complete = false;
  }
}