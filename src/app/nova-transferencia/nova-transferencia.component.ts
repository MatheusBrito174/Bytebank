import { Component } from "@angular/core";

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls:['./nova-transferencia.component.scss']
})
export class NovaTransferencia {
  valor!: number;
  destino!: string;

  transferir() {
    console.log(this.valor, this.destino);
  }
}
