import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalnderComponent } from './calnder.component';

describe('CalnderComponent', () => {
  let component: CalnderComponent;
  let fixture: ComponentFixture<CalnderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalnderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalnderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
