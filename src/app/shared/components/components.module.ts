import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { CardComponent } from './card/card.component';
import { CardInfoComponent } from './card-info/card-info.component';
import { TranslocoModule } from '@ngneat/transloco';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';
import { ToastComponent } from './toast/toast.component';

@NgModule({
  imports: [
    CommonModule,
    TranslocoModule,
    ReactiveFormsModule,
  ],
  declarations: [SearchComponent, CardComponent, CardInfoComponent, LoaderComponent, ToastComponent],
  exports: [SearchComponent, CardComponent, CardInfoComponent, LoaderComponent, ToastComponent],
})

export class ComponentsModule {}
