import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoFinancasComponent } from './gestao-financas.component';

describe('GestaoFinancasComponent', () => {
  let component: GestaoFinancasComponent;
  let fixture: ComponentFixture<GestaoFinancasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestaoFinancasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestaoFinancasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
