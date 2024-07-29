import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FianceComponent } from './fiance.component';

describe('FianceComponent', () => {
  let component: FianceComponent;
  let fixture: ComponentFixture<FianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FianceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
