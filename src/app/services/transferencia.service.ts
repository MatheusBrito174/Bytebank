import { Transferencia } from './../models/transferencia.model';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TransferenciasApiPaths } from '../enums/TransferenciasApiPaths.enum';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private _baseUrl: string = environment.transferenciasApiBaseUrl;

  constructor(private readonly _httpClent: HttpClient) { }

  adicionar(transferencia: Transferencia): Observable<Transferencia> {
    const postUrl = `${this._baseUrl}/${TransferenciasApiPaths.Transferencias}`;
    return this._httpClent.post<Transferencia>(postUrl, transferencia);
  }

  transferencias(): Observable<Transferencia[]> {
    const getUrl = `${this._baseUrl}/${TransferenciasApiPaths.Transferencias}`;

    return this._httpClent.get<Transferencia[]>(getUrl);
  }

  transferencia(id: number): Observable<Transferencia> {
    const getUrl = `${this._baseUrl}/${TransferenciasApiPaths.Transferencias}/${id}`;

    return this._httpClent.get<Transferencia>(getUrl);
  }
}
