import { Component, HostListener, OnInit } from '@angular/core';
import { PokemonInfo, PokemonStatisticLabels } from 'src/app/shared/models/pokemon.model';
import { PokemonService } from 'src/app/shared/services/pokemon/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public readonly PokemonStatisticLabels = PokemonStatisticLabels;
  public pokemonList: PokemonInfo[] = [];
  public pokemonSelected: PokemonInfo;
  public pokemonInfoFixed: boolean;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getAll().subscribe(data => {
      this.pokemonList = data.results;
      
      this.selectPokemon();
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    this.pokemonInfoFixed = $event.srcElement.scrollingElement.scrollTop >= window.innerHeight * 0.12;
  }

  selectPokemon() {
    console.log(this.pokemonList[1]);

    // console.log(this.pokemonList[1].status.stats[0].base_stat)

    this.pokemonSelected = this.pokemonList[1];
  }

}
