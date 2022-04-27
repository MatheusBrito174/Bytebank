import { Transferencia } from './../models/transferencia.model';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private _transferencias: Transferencia[] = [];

  adicionar(transferencia: Transferencia) {
    this._transferencias.push(transferencia);
  }

  get transferencias() {
    return [...this._transferencias];
  }
}
