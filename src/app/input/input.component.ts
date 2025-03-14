import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {

  @Output() botonPulsado = new EventEmitter<boolean>();

  inputInversionInicial: number = 0;
  inputAportacionAnual: number = 0;
  inputTasaRetorno: number = 0;
  inputDuracion: number = 0;

  datosIntroducidos() {
    this.botonPulsado.emit(true);
  }

  calculateInvestmentResults() {
    const annualData = [];
    let investmentValue = this.inputInversionInicial;

    for (let i = 0; i < this.inputDuracion; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (this.inputTasaRetorno / 100);
      investmentValue += interestEarnedInYear + this.inputAportacionAnual;
      const totalInterest =
        investmentValue - this.inputAportacionAnual * year - this.inputInversionInicial;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: this.inputAportacionAnual,
        totalInterest: totalInterest,
        totalAmountInvested: this.inputInversionInicial + this.inputAportacionAnual * year,
      });
    }
  
    // return annualData;
    return console.log(annualData);
  }

}
