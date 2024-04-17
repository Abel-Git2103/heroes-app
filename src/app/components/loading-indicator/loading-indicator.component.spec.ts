import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingIndicatorComponent } from './loading-indicator.component';
import { LoadingService } from 'src/app/services/loading.service';
import { Router } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

describe('LoadingIndicatorComponent', () => {
    let component: LoadingIndicatorComponent;
    let fixture: ComponentFixture<LoadingIndicatorComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule],
            declarations: [LoadingIndicatorComponent],
            providers: [LoadingService, Router]
        });
        fixture = TestBed.createComponent(LoadingIndicatorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
