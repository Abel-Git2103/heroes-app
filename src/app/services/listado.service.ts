import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Heroe } from '../shared/models/heroe.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ListadoService {
    private baseUrl: string = 'https://s182blq6-3000.uks1.devtunnels.ms/superheroes';

    constructor(private http: HttpClient) {}

    /* Devuelve el listado de héroes */
    public obtenerListadoHeroes(): Observable<Heroe[]> {
        return this.http.get<Heroe[]>(this.baseUrl);
    }
}
