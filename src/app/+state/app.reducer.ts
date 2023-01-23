import { createReducer, on, Action } from '@ngrx/store';

import * as AppActions from './app.actions';

export const APP_FEATURE_KEY = 'app';

export interface AppState {
  selectedId?: string | number; // which App record has been selected
  loaded: boolean; // has the App list been loaded
  error?: string | null; // last known error (if any)
  gameLibrary?: any;
}

export interface AppPartialState {
  readonly [APP_FEATURE_KEY]: AppState;
}

export const initialState: AppState = {
  // set initial required properties
  loaded: false,
};

export const appReducer = createReducer(
  initialState,
  on(AppActions.loadUserLibrarySuccess, (state, { gameLibrary }) => ({ 
    ...state,
    gameLibrary,
    loaded: true
  }))
);

export function reducer(state: AppState | undefined, action: Action) {
  return appReducer(state, action);
}
