import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as AppActions from './app.actions';
import * as AppSelectors from './app.selectors';

@Injectable()
export class AppFacade {
  userLibrary$ = this.store.pipe(select(AppSelectors.getgameLibrary));

  constructor(private readonly store: Store) {}

  loadLibrary(userId: string) {
    this.store.dispatch(AppActions.loadUserLibrary({ userId }));
  }
}