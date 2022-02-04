import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCryptoComponent } from './select-crypto.component';

describe('SelectCryptoComponent', () => {
  let component: SelectCryptoComponent;
  let fixture: ComponentFixture<SelectCryptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectCryptoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCryptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
