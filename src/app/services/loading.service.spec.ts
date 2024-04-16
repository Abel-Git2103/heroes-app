import { TestBed } from '@angular/core/testing';

import { LoadingService } from './loading.service';
import { HttpClient } from '@angular/common/http';

describe('LoadingService', () => {
    let service: LoadingService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [HttpClient]
        });
        service = TestBed.inject(LoadingService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
