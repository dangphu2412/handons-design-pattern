import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import counterReducer from './slice';

export function makeStore() {
  return configureStore({
    reducer: { counter: counterReducer }
  });
}

export const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;
