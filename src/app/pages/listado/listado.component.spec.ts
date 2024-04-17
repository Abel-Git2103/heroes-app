import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HeroesService } from 'src/app/services/heroes.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListadoComponent } from './listado.component';

describe('ListadoComponent', () => {
    let component: ListadoComponent;
    let fixture: ComponentFixture<ListadoComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule, HttpClientModule, RouterTestingModule],
            declarations: [ListadoComponent],
            providers: [Router, HeroesService, MatSnackBar]
        });
        fixture = TestBed.createComponent(ListadoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
