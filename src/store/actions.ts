import {action} from "./initStore";

const increase = action((store) => store.count += 1)

export const actions = {
  increase
}
