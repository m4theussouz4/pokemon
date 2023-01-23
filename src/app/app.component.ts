import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styles: [
    `
      :host {
        min-height: 100%;
      }
    `,
  ],
})
export class AppComponent {}