import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [SearchComponent, CardComponent],
  exports: [SearchComponent, CardComponent],
})

export class ComponentsModule {}
