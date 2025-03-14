import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { InputComponent } from './input/input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, InputComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
