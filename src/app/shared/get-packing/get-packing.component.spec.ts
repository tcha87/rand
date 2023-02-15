import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPackingComponent } from './get-packing.component';

describe('GetPackingComponent', () => {
  let component: GetPackingComponent;
  let fixture: ComponentFixture<GetPackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetPackingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
