import { createAction, props } from '@ngrx/store';
import { PokemonInfo } from '../shared/models/pokemon.model';

export const setLoading = createAction(
  '[App] Set Loading'
);

export const loadPokemonList  = createAction(
  '[App] Load Pokemon List'
);

export const loadPokemonListSuccess = createAction(
  '[App] Load Pokemon List Success',
  props<{ pokemonList: PokemonInfo[], hasNext: boolean, offset: number }>()
);

export const loadPokemonListError = createAction(
  '[App] Load Pokemon List Error',
  props<{ error: any }>()
);

export const selectPokemon = createAction(
  '[App] Select Pokemon',
  props<{ pokemonInfo: PokemonInfo }>()
);