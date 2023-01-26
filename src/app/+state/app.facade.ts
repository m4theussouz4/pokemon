import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as AppActions from './app.actions';
import * as AppSelectors from './app.selectors';

@Injectable()
export class AppFacade {
  pokemonList$ = this.store.pipe(select(AppSelectors.getPokemonList));
  pokemonSelected$ = this.store.pipe(select(AppSelectors.getPokemonSelected));
  hasNextPage$ = this.store.pipe(select(AppSelectors.getHasNextPage));
  loaded$ = this.store.pipe(select(AppSelectors.getLoaded));

  constructor(private readonly store: Store) {}

  loadPokemonList() {
    this.store.dispatch(AppActions.loadPokemonList());
  }

  selectPokemon(pokemon) {
    this.store.dispatch(AppActions.selectPokemon({pokemonInfo: pokemon}));
  }
}