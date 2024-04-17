import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { EMPTY, Observable, map, mergeMap, of, take } from 'rxjs';
import { BusquedaService } from '../services/busqueda.service';
import { HeroesService } from '../services/heroes.service';
import { Constants } from '../shared/models/constants.model';
import { Heroe } from '../shared/models/heroe.model';

export const globalResolver: ResolveFn<boolean> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> => {
    const heroesService: HeroesService = inject(HeroesService);
    const busquedaService: BusquedaService = inject(BusquedaService);

    const id: string = route.params['id'];

    switch (state.url) {
        case Constants.appUrls.listado:
            return heroesService.obtenerListadoHeroes().pipe(
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
        case Constants.appUrls.editarHeroe.replace('{id}', id):
            return heroesService.obtenerHeroePorId(id).pipe(
                take(1),
                mergeMap((heroe: Heroe) => {
                    if (heroe) {
                        return of(heroe);
                    } else {
                        return EMPTY;
                    }
                })
            );

        default:
            return EMPTY;
    }
};
