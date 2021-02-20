import {ImmerBase} from './ImmerBase';

export class Store extends ImmerBase {
  count: number = 0;

  // Note: Doesn't work just define in class
  // public increase() {
  //   this.count += 1;
  // }
}
