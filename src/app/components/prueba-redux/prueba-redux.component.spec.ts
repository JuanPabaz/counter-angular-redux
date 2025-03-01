import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaReduxComponent } from './prueba-redux.component';

describe('PruebaReduxComponent', () => {
  let component: PruebaReduxComponent;
  let fixture: ComponentFixture<PruebaReduxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PruebaReduxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebaReduxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
