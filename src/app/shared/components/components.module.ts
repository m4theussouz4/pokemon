import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { CardComponent } from './card/card.component';
import { CardInfoComponent } from './card-info/card-info.component';
import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
  imports: [
    CommonModule,
    TranslocoModule
  ],
  declarations: [SearchComponent, CardComponent, CardInfoComponent],
  exports: [SearchComponent, CardComponent, CardInfoComponent],
})

export class ComponentsModule {}
