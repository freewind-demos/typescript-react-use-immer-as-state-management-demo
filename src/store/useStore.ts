import {useContext} from 'react';
import {StoreContext} from './initStore';

export function useStore() {
  return useContext(StoreContext);
}
