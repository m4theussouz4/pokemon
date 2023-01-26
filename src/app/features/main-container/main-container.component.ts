import { Component, OnInit } from '@angular/core';
import { AppFacade } from 'src/app/+state/app.facade';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {

  constructor(private appFacade: AppFacade) {
    this.appFacade.loadPokemonList();
  }

  ngOnInit(): void {}

}
