import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Address } from '../../model/export';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AddressMockService {

    constructor(private http: HttpClient) { }

    public getAddress(cep: string): Observable<Address> {
        return this.http.get<Address>(`https://viacep.com.br/ws/${cep}/json/`).pipe();
    }

}
