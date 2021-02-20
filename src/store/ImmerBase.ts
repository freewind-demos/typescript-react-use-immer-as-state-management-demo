import { immerable } from 'immer';

export class ImmerBase {
  [immerable] = true;
}
