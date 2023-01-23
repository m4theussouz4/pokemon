import { createFeatureSelector, createSelector } from '@ngrx/store';
import { APP_FEATURE_KEY, AppState } from './app.reducer';

// Lookup the 'App' feature state managed by NgRx
export const getAppState = createFeatureSelector<AppState>(APP_FEATURE_KEY);

export const getgameLibrary = createSelector(
    getAppState,
    (state: AppState) => state.gameLibrary
);