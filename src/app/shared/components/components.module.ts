import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SearchComponent } from './search/search.component';

const COMPONENTS = [
    SideBarComponent,
    SearchComponent
];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class ComponentsModule {}
