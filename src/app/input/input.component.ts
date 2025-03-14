import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {

  @Output() botonPulsado = new EventEmitter<boolean>();

  datosIntroducidos() {
    this.botonPulsado.emit(true);
  }

}
