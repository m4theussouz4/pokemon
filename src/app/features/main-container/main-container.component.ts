import { Component } from '@angular/core';
import { ScannedActionsSubject } from '@ngrx/store';
import { filter } from 'rxjs';
import { searchPokemonError } from '../../+state/app.actions';
import { AppFacade } from '../../+state/app.facade';
import { PokemonService } from '../../shared/services/pokemon/pokemon.service';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent {

  constructor(
    private appFacade: AppFacade,
    private pokemonService: PokemonService,
    private actions$: ScannedActionsSubject
  ) {
    this.appFacade.loadPokemonList();

    this.actions$.pipe(
      filter(action => action.type === searchPokemonError.type),
    ).subscribe((data: any) => {
      if (data?.message) this.pokemonService.changeMessage('pokemon not found')
    })
  }

}
