import { createReducer, on } from '@ngrx/store';
import { PokemonInfo } from '../shared/models/pokemon.model';

import * as AppActions from './app.actions';

export const APP_FEATURE_KEY = 'app';

export interface AppState {
  loaded: boolean;
  error?: string | null;
  pokemonList: PokemonInfo[];
  pokemonSelected: PokemonInfo;
  hasNextPage: boolean;
  currentOffset: number;
  pokemonWeaknesses: { [key: string]: string[] };
}

export const initialState: AppState = {
  loaded: false,
  pokemonList: [],
  pokemonSelected: null,
  hasNextPage: true,
  currentOffset: 0,
  pokemonWeaknesses: {}
};

export const appReducer = createReducer(
  initialState,
  on(AppActions.loadPokemonListSuccess, (state, { pokemonList, hasNext, offset }) => ({ 
    ...state,
    pokemonList: [...state.pokemonList, ...pokemonList],
    hasNextPage: hasNext,
    loaded: true,
    currentOffset: offset
  })),

  on(AppActions.selectPokemon, (state, { pokemonInfo }) => ({ 
    ...state,
    pokemonSelected: pokemonInfo
  })),

  on(AppActions.loadPokemonWeaknessesSucess, (state, { pokemonWeaknesses }) => ({ 
    ...state,
    pokemonWeaknesses: pokemonWeaknesses
  })),

  on(AppActions.setLoading, state => ({ 
    ...state,
    loaded: false
  })),
);
