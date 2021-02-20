import React, {FC, PropsWithChildren, Context, createContext, Dispatch} from 'react';
import {useImmerReducer} from 'use-immer';
import {Draft} from 'immer';

type StoreContext<S> = [S, Dispatch<(store: Draft<S>) => void>];

export function buildImmerStore<S>(
  initStore: S
): {
  StoreProvider: FC<PropsWithChildren<{}>>;
  StoreContext: Context<StoreContext<S>>;
  selector: <T>(state: (s: S) => T) => (s: S) => T;
  action: (state: (s: S) => void) => (s: S) => void;
} {
  const StoreContext = createContext<StoreContext<S>>(undefined as any); // default required but not used
  const StoreProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
    const storeContext: StoreContext<S> = useImmerReducer<S, (s: Draft<S>) => void>(
      (store, action) => void action(store),
      initStore
    );
    return <StoreContext.Provider value={storeContext}>{children}</StoreContext.Provider>;
  };
  return {
    StoreContext,
    StoreProvider,
    selector: (s) => s,
    action: (a) => a,
  };
}

