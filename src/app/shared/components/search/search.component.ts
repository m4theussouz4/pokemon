import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AppFacade } from '../../../+state/app.facade';

@Component({
  selector: 'poke-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  public search: FormControl = new FormControl('');

  constructor(private appFacade: AppFacade){}

  searchPokemon() {
    this.appFacade.searchPokemon(this.search.value);
  }

}
