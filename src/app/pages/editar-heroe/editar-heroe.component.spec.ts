import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarHeroeComponent } from './editar-heroe.component';

describe('EditarHeroeComponent', () => {
  let component: EditarHeroeComponent;
  let fixture: ComponentFixture<EditarHeroeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarHeroeComponent]
    });
    fixture = TestBed.createComponent(EditarHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
