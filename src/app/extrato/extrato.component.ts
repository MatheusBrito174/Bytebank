import { TransferenciaService } from './../services/transferencia.service';
import { Component, OnInit } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transferencias!: Transferencia[];

  constructor(private _service: TransferenciaService) { }

  ngOnInit(): void {
    this._service.transferencias().subscribe(transferencias => this.transferencias = transferencias);
  }
}
