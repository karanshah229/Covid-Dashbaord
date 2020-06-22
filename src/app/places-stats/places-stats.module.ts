import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacesStatsComponent } from './places-stats/places-stats.component';
import { PlacesStatsRoutingModule } from './places-stats-routing.module';
import { PlacesStatsPlaceComponent } from './places-stats-place/places-stats-place.component';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzInputModule } from 'ng-zorro-antd/input';
import { IconsProviderModule } from '../icons-provider.module';

@NgModule({
  declarations: [PlacesStatsComponent, PlacesStatsPlaceComponent],
  imports: [
    CommonModule,
    PlacesStatsRoutingModule,
    NzTableModule,
    NzAutocompleteModule,
    NzInputModule,
    IconsProviderModule
  ]
})
export class PlacesStatsModule { }
