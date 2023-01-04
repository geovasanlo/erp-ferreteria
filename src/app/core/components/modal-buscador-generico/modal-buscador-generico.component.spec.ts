import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBuscadorGenericoComponent } from './modal-buscador-generico.component';

describe('ModalBuscadorGenericoComponent', () => {
  let component: ModalBuscadorGenericoComponent;
  let fixture: ComponentFixture<ModalBuscadorGenericoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalBuscadorGenericoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBuscadorGenericoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
