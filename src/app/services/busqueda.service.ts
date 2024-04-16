import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../shared/models/heroe.model';

@Injectable({
    providedIn: 'root'
})
export class BusquedaService {
    private _baseUrl: string = 'http://localhost:3000/heroes';
    private _http: HttpClient = inject(HttpClient);

    /* Permite obtener las sugerencias del input de búsqueda */
    obtenerSugerenciasInput(): Observable<Heroe[]> {
        return this._http.get<Heroe[]>(this._baseUrl);
    }
}
