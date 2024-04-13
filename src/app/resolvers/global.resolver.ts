import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { EMPTY, Observable, map, mergeMap, of, take } from 'rxjs';
import { BusquedaService } from '../services/busqueda.service';
import { ListadoService } from '../services/listado.service';
import { Constants } from '../shared/models/constants.model';
import { Heroe } from '../shared/models/heroe.model';

export const globalResolver: ResolveFn<boolean> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> => {
    const listadoService: ListadoService = inject(ListadoService);
    const busquedaService: BusquedaService = inject(BusquedaService);

    switch (state.url) {
        case Constants.appUrls.listado:
            return listadoService.obtenerListadoHeroes().pipe(
                take(1),
                mergeMap((listadoData: Heroe[]) => {
                    if (listadoData) {
                        return of(listadoData);
                    } else {
                        return EMPTY;
                    }
                })
            );
        case Constants.appUrls.busqueda:
            return busquedaService.obtenerSugerenciasInput().pipe(
                take(1),
                mergeMap((busquedaData: Heroe[]) => {
                    if (busquedaData) {
                        return of(busquedaData).pipe(map((heroe) => heroe.map(({ alias }) => alias)));
                    } else {
                        return EMPTY;
                    }
                })
            );

        default:
            return EMPTY;
    }
};
