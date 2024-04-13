import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../shared/models/heroe.model';

@Injectable({
    providedIn: 'root'
})
export class ListadoService {
    private _baseUrl: string = 'https://s182blq6-3000.uks1.devtunnels.ms/superheroes';
    private _http: HttpClient = inject(HttpClient);

    /* Devuelve el listado de héroes */
    obtenerListadoHeroes(): Observable<Heroe[]> {
        return this._http.get<Heroe[]>(this._baseUrl);
    }
}
