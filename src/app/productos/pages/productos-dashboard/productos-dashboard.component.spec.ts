import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosDashboardComponent } from './productos-dashboard.component';

describe('ProductosDashboardComponent', () => {
  let component: ProductosDashboardComponent;
  let fixture: ComponentFixture<ProductosDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
