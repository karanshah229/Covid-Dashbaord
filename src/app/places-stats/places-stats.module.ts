import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacesStatsComponent } from './places-stats/places-stats.component';
import { PlacesStatsRoutingModule } from './places-stats-routing.module';
import { PlacesStatsPlaceComponent } from './places-stats-place/places-stats-place.component';

import { NzTableModule } from 'ng-zorro-antd/table';

@NgModule({
  declarations: [PlacesStatsComponent, PlacesStatsPlaceComponent],
  imports: [
    CommonModule,
    PlacesStatsRoutingModule,
    NzTableModule
  ]
})
export class PlacesStatsModule { }
