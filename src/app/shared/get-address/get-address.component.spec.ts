import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAddressComponent } from './get-address.component';

describe('GetAddressComponent', () => {
  let component: GetAddressComponent;
  let fixture: ComponentFixture<GetAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
