import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { HeroesService } from 'src/app/services/heroes.service';
import { BusquedaComponent } from './busqueda.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('BusquedaComponent', () => {
    let component: BusquedaComponent;
    let fixture: ComponentFixture<BusquedaComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule, BrowserAnimationsModule, HttpClientModule, RouterTestingModule],
            declarations: [BusquedaComponent],
            providers: [HeroesService, MatSnackBar]
        });
        fixture = TestBed.createComponent(BusquedaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
