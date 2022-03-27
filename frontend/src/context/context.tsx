import React, { createContext, useReducer } from 'react';
import { initialState, reducer } from './reducer';
import { AppState } from './types';

interface ContextValue {
    state: AppState;
    dispatch: any;
}

const store = createContext<ContextValue>({ state: initialState, dispatch: null });
const { Provider } = store;

const StateProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Provider value={{ state, dispatch }}>
      {children}
    </Provider>
  );
};

export { store, StateProvider };
