import { Component, HostListener } from '@angular/core';
import { Observable } from 'rxjs';
import { AppFacade } from 'src/app/+state/app.facade';
import { PokemonInfo, PokemonStatisticLabels } from 'src/app/shared/models/pokemon.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public readonly PokemonStatisticLabels = PokemonStatisticLabels;
  public readonly hasNext$: Observable<boolean>;
  public readonly loaded$: Observable<boolean>;
  public pokemonList: PokemonInfo[] = [];
  public pokemonSelected: PokemonInfo;
  public pokemonInfoFixed: boolean;

  constructor(private appFacade: AppFacade) {
    this.appFacade.pokemonList$.subscribe(pokemon => {
      this.pokemonList = pokemon;
      if(!this.pokemonSelected && pokemon) this.selectPokemon(pokemon[1]);
    });
    this.appFacade.pokemonList$.subscribe(pokemon => {
      this.pokemonList = pokemon;
      if(!this.pokemonSelected && pokemon) this.selectPokemon(pokemon[1]);
    });
    this.appFacade.pokemonSelected$.subscribe(pokemon => {
      this.pokemonSelected = pokemon;
    });
    this.hasNext$ = this.appFacade.hasNextPage$;
    this.loaded$ = this.appFacade.loaded$;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    this.pokemonInfoFixed = $event.srcElement.scrollingElement.scrollTop >= window.innerHeight * 0.12;
  }

  selectPokemon(pokemon) {
    this.appFacade.selectPokemon(pokemon);
  }

  onScroll() {
    this.appFacade.loadPokemonList();
  }

}
