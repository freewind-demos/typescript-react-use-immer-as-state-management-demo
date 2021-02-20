import {buildImmerStore} from './buildImmerStore';
import {Store} from './Store';

export const {StoreProvider, StoreContext, action, selector} = buildImmerStore<Store>(new Store());
