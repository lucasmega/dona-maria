import { Injectable } from '@angular/core';
import { SideNavModel } from '../../model/export';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  private items: SideNavModel[] = [
    { item: 'Solicitações', icon: 'solicitation' },
    { item: 'Pagamentos', icon: 'payment' },
    { item: 'Contrato', icon: 'contract' },
    { item: 'Configurações', icon: 'config' },
    { item: 'Ajuda', icon: 'help' },
    { item: 'Sair', icon: 'logout' },
  ];

  constructor() { }

  public getItems() {
    return this.items;
  }

}
