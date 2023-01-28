import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesRoutingModule } from './features-routing.module';
import { MainContainerComponent } from './main-container/main-container.component';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../shared/components/components.module';
import { TranslocoModule } from '@ngneat/transloco';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    HomeComponent,
    MainContainerComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    ComponentsModule,
    TranslocoModule,
    InfiniteScrollModule
  ],
  providers: [MainContainerComponent],
})
export class FeaturesModule {}
