import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { CardComponent } from './card/card.component';
import { CardInfoComponent } from './card-info/card-info.component';
import { TranslocoModule } from '@ngneat/transloco';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TranslocoModule,
    ReactiveFormsModule,
  ],
  declarations: [SearchComponent, CardComponent, CardInfoComponent],
  exports: [SearchComponent, CardComponent, CardInfoComponent],
})

export class ComponentsModule {}
