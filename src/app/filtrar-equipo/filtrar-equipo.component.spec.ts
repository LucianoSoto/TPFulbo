import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrarEquipoComponent } from './filtrar-equipo.component';

describe('FiltrarEquipoComponent', () => {
  let component: FiltrarEquipoComponent;
  let fixture: ComponentFixture<FiltrarEquipoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltrarEquipoComponent]
    });
    fixture = TestBed.createComponent(FiltrarEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
