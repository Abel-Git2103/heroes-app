import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCardComponent } from './hero-card.component';
import { HeroesService } from 'src/app/services/heroes.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeroCardComponent', () => {
    let component: HeroCardComponent;
    let fixture: ComponentFixture<HeroCardComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule, HttpClientModule, RouterTestingModule],
            declarations: [HeroCardComponent],
            providers: [HeroesService]
        });
        fixture = TestBed.createComponent(HeroCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
