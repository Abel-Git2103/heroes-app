import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoHeroeComponent } from './nuevo-heroe.component';

describe('NuevoHeroeComponent', () => {
  let component: NuevoHeroeComponent;
  let fixture: ComponentFixture<NuevoHeroeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevoHeroeComponent]
    });
    fixture = TestBed.createComponent(NuevoHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
