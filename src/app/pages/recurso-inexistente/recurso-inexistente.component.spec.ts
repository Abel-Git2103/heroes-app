import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursoInexistenteComponent } from './recurso-inexistente.component';

describe('RecursoInexistenteComponent', () => {
  let component: RecursoInexistenteComponent;
  let fixture: ComponentFixture<RecursoInexistenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
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
