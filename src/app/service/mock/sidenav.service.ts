import { Injectable } from '@angular/core';
import { 
  HelpModel,
  SideNavModel, 
  FilterRequest, 
  SolicitationModel as RequestCompletedModel, 
  SolicitationModel as RequestInProgressModel,  
} from '../../model/export';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  private items: SideNavModel[] = [
    { item: 'Nova solicitação', icon: 'home', menu: 'category', page: true },
    { item: 'Solicitações', icon: 'solicitation', menu: 'solicitation', page: false },
    { item: 'Pagamentos', icon: 'payment', menu: 'payment',  page: true },
    { item: 'Contrato', icon: 'contract', menu: '',  page: true },
    { item: 'Configurações', icon: 'config', menu: '',  page: true },
    { item: 'Ajuda', icon: 'help', menu: 'help',  page: false },
    { item: 'Sair', icon: 'logout', menu: 'login',  page: true },
  ];

  private filter: FilterRequest[] = [
    { id: 0, item: 'Finalizadas', icon: 'request-completed', menu: 'request-completed'},
    { id: 1, item: 'Em andamento', icon: 'request-in-progress', menu: 'request-in-progress'}
  ]

  private progress: RequestInProgressModel[] = [
    { id: 0, page: true, menu: 'receipt', icon: 'calendar', date: '23/04/2020', address: 'Rua Madre Ana Justina, 03 - São Paulo - SP', category: 'Diarista', payment: 150.00 },
    { id: 1, page: true, menu: 'receipt', icon: 'calendar', date: '24/04/2020', address: 'Rua Madre Ana Justina, 03 - São Paulo - SP', category: 'Faxineira', payment: 120.00 },
    { id: 2, page: true, menu: 'receipt', icon: 'calendar', date: '25/04/2020', address: 'Rua Madre Ana Justina, 03 - São Paulo - SP', category: 'Cozinheira', payment: 120.00 },
    { id: 3, page: true, menu: 'receipt', icon: 'calendar', date: '26/04/2020', address: 'Rua Madre Ana Justina, 03 - São Paulo - SP', category: 'Lavadeira', payment: 120.00 }
  ];

  private completed: RequestCompletedModel[] = [
    { id: 0, page: true, menu: 'receipt', icon: 'calendar', date: '23/04/2020', address: 'Rua Madre Ana Justina, 03 - São Paulo - SP', category: 'Diarista', payment: 150.00 },
    { id: 1, page: true, menu: 'receipt', icon: 'calendar', date: '24/04/2020', address: 'Rua Madre Ana Justina, 03 - São Paulo - SP', category: 'Faxineira', payment: 120.00 },
    { id: 2, page: true, menu: 'receipt', icon: 'calendar', date: '25/04/2020', address: 'Rua Madre Ana Justina, 03 - São Paulo - SP', category: 'Cozinheira', payment: 120.00 },
    { id: 3, page: true, menu: 'receipt', icon: 'calendar', date: '26/04/2020', address: 'Rua Madre Ana Justina, 03 - São Paulo - SP', category: 'Lavadeira', payment: 120.00 }
  ];

  private help: HelpModel[] = [
    { id: 0, item: 'Segurança', icon: 'security', page: false, menu: 'security'},
    { id: 0, item: 'Taxas e valores', icon: 'rate', page: false, menu: 'rate'},
    { id: 0, item: 'Conduta domestica', icon: 'conduct', page: false, menu: 'conduct'},
  ];

  constructor() { }

  public getHelp() {
    return this.help;
  }

  public getItems() {
    return this.items;
  }

  public getFilterRequest() {
    return this.filter;
  }

  public getRequestsInProgress() {
    return this.progress;
  }

  public getRequestsCompleted() {
    return this.completed;
  }

}
