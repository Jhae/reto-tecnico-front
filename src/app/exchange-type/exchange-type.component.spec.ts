import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeTypeComponent } from './exchange-type.component';

describe('ExchangeTypeComponent', () => {
  let component: ExchangeTypeComponent;
  let fixture: ComponentFixture<ExchangeTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExchangeTypeComponent]
    });
    fixture = TestBed.createComponent(ExchangeTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
