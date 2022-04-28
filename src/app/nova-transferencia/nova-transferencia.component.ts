import { TransferenciaService } from './../services/transferencia.service';
import { Transferencia } from './../models/transferencia.model';
import { Component } from "@angular/core";

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls:['./nova-transferencia.component.scss']
})
export class NovaTransferencia {
  valor!: number;
  destino!: string;

  constructor(private _service: TransferenciaService) { }

  transferir() {
    const transferencia: Transferencia = {
      valor: this.valor,
      destino: this.destino,
      data: new Date()
    }

    this._service.adicionar(transferencia).subscribe();
  }
}
