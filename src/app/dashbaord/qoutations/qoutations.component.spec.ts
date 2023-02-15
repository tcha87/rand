import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QoutationsComponent } from './qoutations.component';

describe('QoutationsComponent', () => {
  let component: QoutationsComponent;
  let fixture: ComponentFixture<QoutationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QoutationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QoutationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
