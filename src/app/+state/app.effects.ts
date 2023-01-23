import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, mergeMap, of, withLatestFrom } from 'rxjs';
// import { GameService } from '../shared/game/game.service';
import * as AppActions from './app.actions';
import { AppState } from './app.reducer';
import { getgameLibrary } from './app.selectors';

@Injectable()
export class AppEffects {
  
  constructor(
    private actions$: Actions,
    // private gameService: GameService,
    private store: Store<{
      app: AppState;
    }>
  ) {}

  // loadLibrary$ = createEffect(() =>
  //     this.actions$.pipe(
  //       ofType(AppActions.loadUserLibrary),
  //       withLatestFrom(this.store.select(getgameLibrary)),
  //       mergeMap(([{ userId }, store]) => {
  //         if(store) return of();

  //         return this.gameService.getUserGames(userId).pipe(
  //           map(data => {
  //             return AppActions.loadUserLibrarySuccess({ gameLibrary: data })
  //           })
  //         )}
  //       )
  //     )
  // );

}
