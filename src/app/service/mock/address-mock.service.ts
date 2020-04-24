import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';

import { Address } from '../../model/export';

@Injectable({
    providedIn: 'root'
})
export class AddressMockService {

    constructor(private http: HttpClient) { }

    public adresses: Address[] = [
        {
            cep: "09941070", logradouro: "Rua França", bairro: "Jardim Nações", complemento: "", localidade: "Diadema", uf: "SP", unidade: "", ibge: "", gia: "", numero: "45"
        }
    ]

    public getAddress(cep: string): Observable<Address> {
        return this.http.get<Address>(`https://viacep.com.br/ws/${cep}/json/`).pipe();
    }

    public registered(): Address[] {
        return this.adresses;
    }

}
