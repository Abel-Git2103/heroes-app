import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { RecursoInexistenteComponent } from './recurso-inexistente.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('RecursoInexistenteComponent', () => {
    let component: RecursoInexistenteComponent;
    let fixture: ComponentFixture<RecursoInexistenteComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, SharedModule],
            declarations: [RecursoInexistenteComponent]
        });
        fixture = TestBed.createComponent(RecursoInexistenteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
