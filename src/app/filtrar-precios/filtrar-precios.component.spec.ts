import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrarPrecioComponent } from './filtrar-precios.component';

describe('FiltrarPrecioComponent', () => {
  let component: FiltrarPrecioComponent;
  let fixture: ComponentFixture<FiltrarPrecioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltrarPrecioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrarPrecioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
