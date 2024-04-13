import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { SkipLoading } from '../helpers/loading.interceptor';
import { Heroe } from '../shared/models/heroe.model';

@Injectable({
    providedIn: 'root'
})
export class BusquedaService {
    private baseUrl: string = 'https://s182blq6-3000.uks1.devtunnels.ms/superheroes';
    private _http: HttpClient = inject(HttpClient);

    /* Permite obtener las sugerencias del input de búsqueda */
    public obtenerSugerenciasInput(): Observable<Heroe[]> {
        return this._http.get<Heroe[]>(this.baseUrl);
    }

    /* Permite obtener un héroe por su id */
    public findHeroById(id: string): Observable<Heroe[]> {
        return this._http.get<Heroe[]>(`${this.baseUrl}/${id}`, {
            context: new HttpContext().set(SkipLoading, true)
        });
    }
}
