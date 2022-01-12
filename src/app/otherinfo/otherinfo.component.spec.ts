import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherinfoComponent } from './otherinfo.component';

describe('OtherinfoComponent', () => {
  let component: OtherinfoComponent;
  let fixture: ComponentFixture<OtherinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
