import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {

  @Input() valor1: number = 0;
  @Input() valor2: number = 0;
  @Output() respuesta: EventEmitter<number> = new EventEmitter();
  @Output() limpiar: EventEmitter<boolean> = new EventEmitter();

  resultado: number = 0;
  public hacerCalculo(operacion: number){
    switch (operacion){
      case 1:
        this.resultado = parseInt(this.valor1.toString()) + parseInt(this.valor2.toString())
        this.respuesta.emit(this.resultado);
        break;
      case 2:
        this.resultado = this.valor1 - this.valor2
        this.respuesta.emit(this.resultado);
        break;
      case 3:
        this.resultado = this.valor1 * this.valor2
        this.respuesta.emit(this.resultado);
        break;
      case 4:
        this.resultado = this.valor1 / this.valor2
        this.respuesta.emit(this.resultado);
        break;
      case 5:
        this.resultado = this.valor1 ^ this.valor2
        this.respuesta.emit(this.resultado);
        break;
    }
  }
  public onLimpiar(){
    this.limpiar.emit(true);
  }
}
