import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialogModule } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from './dialogo-confirmacion.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('DialogoConfirmacionComponent', () => {
    let component: DialogoConfirmacionComponent;
    let fixture: ComponentFixture<DialogoConfirmacionComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule],
            declarations: [DialogoConfirmacionComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(DialogoConfirmacionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
