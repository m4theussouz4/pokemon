import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PokemonTypesColors } from '../../models/pokemon.model';

@Component({
  selector: 'poke-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() cardData;

  @Output() selectedCard = new EventEmitter();

  public readonly pokemonTypesColors = PokemonTypesColors;

  constructor(){
  }

  selectCard(card) {
    this.selectedCard.emit(card)
  }
}
