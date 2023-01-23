import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesRoutingModule } from './features-routing.module';
import { MainContainerComponent } from './main-container/main-container.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ComponentsModule } from '../shared/components/components.module';
import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
  declarations: [
    HomeComponent,
    MainContainerComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    ComponentsModule,
    TranslocoModule
  ],
  providers: [MainContainerComponent],
})
export class FeaturesModule {}
