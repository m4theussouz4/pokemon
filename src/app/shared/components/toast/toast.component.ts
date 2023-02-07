import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon/pokemon.service';

@Component({
  selector: 'poke-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {

  public showToast = false;
  public message: string;

  constructor(private pokemonService: PokemonService){
    this.pokemonService.currentMessage.subscribe(message => {
      console.log(message);
      
      if(message) {
        this.message = message
        this.show();
      }
    });
  }

  private show() {
    this.showToast = true;

    setTimeout(() => {
      this.hide();
    }, 10000);
  }

  hide() {
    this.showToast = false;
  }
}
