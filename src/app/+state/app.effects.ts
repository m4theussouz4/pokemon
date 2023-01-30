import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, of, switchMap, withLatestFrom } from 'rxjs';
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
        this.store.dispatch(AppActions.loadPokemonWeaknesses());

        return this.pokemonService.getAll(pokemonState.currentOffset).pipe(
          switchMap(async data => {

            let pokemonListClone = [];

            for (const pokemon of data.results) {
              await new Promise<void>((resolve) => {
                this.pokemonService.getById(pokemon.name).subscribe(pokemonInfo => {
                  pokemonListClone.push({ ...pokemon, ...pokemonInfo });
                  resolve();
                })
              })
            }

            this.store.dispatch(AppActions.loadPokemonListSuccess({ pokemonList: pokemonListClone, hasNext: data.next !== null, offset: pokemonState.currentOffset + 100 }));

          }),
          catchError(error => of(AppActions.loadPokemonListError(error)))
        )
      })
    ),
    { dispatch: false }
  );

  loadPokemonWeaknesses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.loadPokemonWeaknesses),
      mergeMap(async () => {

        let pokemonWeaknessesList = []

        for (let index = 1; index <= 18; index++) {
          await new Promise<void>((resolve) => {
            this.pokemonService.getWeaknesses(index).subscribe(pokemonWeaknesses => {
              pokemonWeaknessesList.push({ [pokemonWeaknesses.name]: pokemonWeaknesses.weaknesses });
              resolve();
            })
          })
        }

        var pokemonWeaknessesListClone = Object.assign({}, ...pokemonWeaknessesList);

        return AppActions.loadPokemonWeaknessesSucess({ pokemonWeaknesses: pokemonWeaknessesListClone });
      }),
    )
  );

  searchPokemon$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.searchPokemon),
      mergeMap(({ search }) => {
        if(!search || search === '') return of({});
        
        return this.pokemonService.getById(search).pipe(
          map(pokemonInfo => {
            this.store.dispatch(AppActions.selectPokemon({ pokemonInfo: pokemonInfo }));
            return AppActions.searchPokemonSucess({ pokemonList: pokemonInfo });
          }),
          catchError(error => of(AppActions.searchPokemonError(error)))
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
  ) { }

}
