import { Component, HostListener, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { AppFacade } from 'src/app/+state/app.facade';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { PokemonInfo, PokemonTypes } from 'src/app/shared/models/pokemon.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild('pokeModal') pokeModal: ModalComponent;

  public readonly hasNext$: Observable<boolean>;
  public readonly loaded$: Observable<boolean>;
  public readonly isFilteredList$: Observable<boolean>;

  public pokemonSelected: PokemonInfo;
  public pokemonList: PokemonInfo[];
  public pokemonTypes: string[];
  public totalStats: number;
  public isMobile: boolean;

  constructor(private appFacade: AppFacade) {
    this.onResize();

    this.appFacade.pokemonList$.subscribe(pokemon => {
      this.pokemonList = pokemon;
      if(!this.pokemonSelected && pokemon) this.selectPokemon(pokemon[0], true);
    });

    this.appFacade.pokemonSelected$.subscribe(pokemon => {
      this.pokemonSelected = pokemon;

      this.totalStats = pokemon?.stats.reduce((accumulator, object) => {
        return accumulator + object.base_stat;
      }, 0);
    });

    this.hasNext$ = this.appFacade.hasNextPage$;
    this.loaded$ = this.appFacade.loaded$;
    this.isFilteredList$ = this.appFacade.isFilteredList$;

    this.pokemonTypes = Object.keys(PokemonTypes);
  }

  @HostListener('window:resize', ['$event'])
  private onResize() {
    this.isMobile = window.innerWidth < 768;
  }

  selectPokemon(pokemon: PokemonInfo, firstLoad?: boolean) {
    this.appFacade.selectPokemon(pokemon);
    if(this.isMobile && !firstLoad) this.pokeModal.open();
  }

  onScroll() {
    this.appFacade.loadPokemonList();
  }

  filterByType(type) {
    this.appFacade.filterByType(type.target.value);
  }

}
