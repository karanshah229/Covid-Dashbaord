import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidProgressComponent } from './covid-progress.component';

describe('CovidProgressComponent', () => {
  let component: CovidProgressComponent;
  let fixture: ComponentFixture<CovidProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
