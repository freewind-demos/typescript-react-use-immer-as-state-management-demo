import {selector} from "./initStore";

const getDoubleCount = selector((store) => {
  return store.count * 2;
});

export const selectors = {
  getDoubleCount,
};

