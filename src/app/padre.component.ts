import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {

  valor1: number = 0;
  valor2: number = 0;
  resultado: number = 0;

  public onValor(event: any, caja: number){
    if(caja == 1){
      this.valor1 = event.target.value;
    }
    else{
      this.valor2 = event.target.value;
    }
  }

  public onResponder(event: number){
    this.resultado = event;
  }

  public onLimpiar(event: boolean){
    this.valor1 = 0;
    this.valor2 = 0;
    this.resultado = 0;
  }
}
