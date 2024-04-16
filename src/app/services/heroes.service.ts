import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Heroe } from '../shared/models/heroe.model';

@Injectable({
    providedIn: 'root'
})
export class HeroesService {
    private _baseUrl: string = 'http://localhost:3000/heroes';
    private _http: HttpClient = inject(HttpClient);

    /* Devuelve el listado de héroes */
    obtenerListadoHeroes(): Observable<Heroe[]> {
        return this._http.get<Heroe[]>(this._baseUrl);
    }

    /* Permite obtener un héroe por su id */
    obtenerHeroePorId(id: string): Observable<Heroe> {
        return this._http.get<Heroe>(`${this._baseUrl}/${id}`);
    }

    /* Permite insertar un nuevo héroe */
    insertarHeroe(heroe: Heroe): Observable<Heroe> {
        return this._http.post<Heroe>(this._baseUrl, heroe);
    }

    /* Permite modificar un héroe por su id */
    modificarHeroe(heroe: Heroe): Observable<Heroe> {
        return this._http.put<Heroe>(`${this._baseUrl}/${heroe.id}`, heroe);
    }

    /* Permite eliminar un héroe por su id */
    eliminarHeroe(id: string): Observable<boolean> {
        return this._http.delete<any>(`${this._baseUrl}/${id}`).pipe(map(() => true));
    }
}
