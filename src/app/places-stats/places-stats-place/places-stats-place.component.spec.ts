import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesStatsPlaceComponent } from './places-stats-place.component';

describe('PlacesStatsPlaceComponent', () => {
  let component: PlacesStatsPlaceComponent;
  let fixture: ComponentFixture<PlacesStatsPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacesStatsPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesStatsPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
