import { createAction, props } from '@ngrx/store';

export const loadUserLibrary  = createAction(
  '[App/API] Load Library',
  props<{ userId: string }>()
);

export const loadUserLibrarySuccess = createAction(
  '[App/API] Load Library Success',
  props<{ gameLibrary: any }>()
);
