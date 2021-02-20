import React, {FC} from 'react';
import {useStore} from './store/useStore';
import {actions} from './store/actions';
import {selectors} from './store/selectors';

type Props = {};

export const Hello: FC<Props> = ({}) => {
  const [store, dispatch] = useStore();

  return <div>
    <div>{store.count}</div>
    <div>{selectors.getDoubleCount(store)}</div>
    <button onClick={() => dispatch(actions.increase)}>+1</button>
  </div>;
}
