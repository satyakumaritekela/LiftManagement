export type AppState = {
  liftSystem?: any | null;
  count?: number;
};

export type Action = {
  type?: string;
  key?: string | any;
  value?: unknown | null;
  state?: AppState;
};

export type Dispatch = (action: Action) => void;
