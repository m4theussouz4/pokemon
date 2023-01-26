import { createFeatureSelector, createSelector } from '@ngrx/store';
import { APP_FEATURE_KEY, AppState } from './app.reducer';

export const getAppState = createFeatureSelector<AppState>(APP_FEATURE_KEY);

export const getPokemonList = createSelector(
    getAppState,
    (state: AppState) => state.pokemonList
);

export const getPokemonSelected = createSelector(
    getAppState,
    (state: AppState) => state.pokemonSelected
);

export const getHasNextPage = createSelector(
    getAppState,
    (state: AppState) => state.hasNextPage
);

export const getLoaded = createSelector(
    getAppState,
    (state: AppState) => state.loaded
);