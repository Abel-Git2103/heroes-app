import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HeroesService } from 'src/app/services/heroes.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeroeComponent } from './heroe.component';

describe('HeroeComponent', () => {
    let component: HeroeComponent;
    let fixture: ComponentFixture<HeroeComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule, HttpClientModule, RouterTestingModule],
            declarations: [HeroeComponent],
            providers: [
                Router,
                FormBuilder,
                HeroesService,
                MatSnackBar,
                { provide: ActivatedRoute, useValue: { snapshot: { data: { mode: { clave: 1, valor: 'edicion' } } } } }
            ]
        });
        fixture = TestBed.createComponent(HeroeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
