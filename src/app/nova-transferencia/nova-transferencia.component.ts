import { TransferenciaService } from './../services/transferencia.service';
import { Transferencia } from './../models/transferencia.model';
import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls:['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {
  valor!: number;
  destino!: string;

  constructor(private _service: TransferenciaService, private readonly _router: Router) { }

  transferir() {
    const transferencia: Transferencia = {
      valor: this.valor,
      destino: this.destino,
      data: new Date()
    }

    this._service.adicionar(transferencia).subscribe(() => this._router.navigateByUrl('extrato'));
  }
}
