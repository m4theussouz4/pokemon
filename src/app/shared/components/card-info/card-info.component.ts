import { Component, HostListener, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { AppFacade } from '../../../+state/app.facade';
import {
  PokemonInfo,
  PokemonStatisticColors,
  PokemonStatisticLabels,
  PokemonTypesColors
} from '../../models/pokemon.model';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss']
})
export class CardInfoComponent {

  public readonly pokemonStatisticLabels = PokemonStatisticLabels;
  public readonly pokemonStatisticColors = PokemonStatisticColors;
  public readonly pokemonTypesColors = PokemonTypesColors;

  public readonly pokemonWeaknesses$: Observable<{ [key: string]: string[] }>;

  @Input() pokemonSelected: PokemonInfo;
  @Input() totalStats: number;

  public pokemonInfoFixed: boolean;

  constructor(private appFacade: AppFacade){
    this.pokemonWeaknesses$ = this.appFacade.pokemonWeaknesses$;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    this.pokemonInfoFixed = $event.srcElement.scrollingElement.scrollTop >= window.innerHeight * 0.12;
  }
}
