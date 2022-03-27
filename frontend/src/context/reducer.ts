import { Action, AppState } from "./types";

export const initialState: AppState = {
  liftSystem: null,
  count: 0,
};

export const reducer = (state: any, action: Action) => {
  switch (action.type) {
    case 'multiUpdate':
      return {
        ...state,
        ...action.state,
      };
    case 'update':
      return {
        ...state,
        [action.key]: action.value,
      };
    default:
      throw new Error();
  }
};