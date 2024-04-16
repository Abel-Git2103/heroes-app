import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { globalResolver } from './global.resolver';
import { HeroesService } from '../services/heroes.service';
import { BusquedaService } from '../services/busqueda.service';

describe('globalResolver', () => {
    const executeResolver: ResolveFn<boolean> = (...resolverParameters) => TestBed.runInInjectionContext(() => globalResolver(...resolverParameters));

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [HeroesService, BusquedaService]
        });
    });

    it('should be created', () => {
        expect(executeResolver).toBeTruthy();
    });
});
