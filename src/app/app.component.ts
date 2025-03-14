import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, InputComponent, OutputComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  
  introducedData = false;

  desplegarOutput() {
    this.introducedData = true;
  }

}
