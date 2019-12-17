import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyChooseComponent } from './component';

describe('CurrencyChooseComponent', () => {
  let component: CurrencyChooseComponent;
  let fixture: ComponentFixture<CurrencyChooseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CurrencyChooseComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
