import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, of, withLatestFrom } from 'rxjs';
import { PokemonService } from '../shared/services/pokemon/pokemon.service';
import * as AppActions from './app.actions';
import * as AppSelectors from './app.selectors'
import { AppState } from './app.reducer';

@Injectable()
export class AppEffects {

  loadPokemonList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.loadPokemonList),
      withLatestFrom(this.store.select(AppSelectors.getAppState)),
      mergeMap(([_, pokemonState]) => {
        this.store.dispatch(AppActions.setLoading());

        return this.pokemonService.getAll(pokemonState.currentOffset).pipe(
          map(async data => {
            
            let pokemonListClone = [];
        
            for (const pokemon of data.results) {
              await new Promise<void> ((resolve) => { 
                this.pokemonService.getById(pokemon.name).subscribe(pokemonInfo => {
                  pokemonListClone.push({...pokemon, ...pokemonInfo});
                  resolve();
                })
              })
            }

            
            this.store.dispatch(
              AppActions.loadPokemonListSuccess({ pokemonList: pokemonListClone, hasNext: data.next !== null, offset: pokemonState.currentOffset + 100 })
            );

          }),
          catchError(error => of(AppActions.loadPokemonListError(error)))
        )
      })
    ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private pokemonService: PokemonService,
    private store: Store<{
      app: AppState;
    }>
  ) {}

}
