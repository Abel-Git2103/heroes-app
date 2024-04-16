import { TestBed } from '@angular/core/testing';

import { LoadingInterceptor } from './loading.interceptor';
import { LoadingService } from '../services/loading.service';

describe('LoadingInterceptor', () => {
    let service: LoadingInterceptor;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [LoadingService, LoadingInterceptor]
        });
        service = TestBed.inject(LoadingInterceptor);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
