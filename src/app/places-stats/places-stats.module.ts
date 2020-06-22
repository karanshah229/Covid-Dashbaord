import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacesStatsComponent } from './places-stats/places-stats.component';
import { PlacesStatsRoutingModule } from './places-stats-routing.module';
import { PlacesStatsPlaceComponent } from './places-stats-place/places-stats-place.component';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzInputModule } from 'ng-zorro-antd/input';
import { IconsProviderModule } from '../icons-provider.module';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

// External Libraries
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [PlacesStatsComponent, PlacesStatsPlaceComponent],
  imports: [
    CommonModule,
    PlacesStatsRoutingModule,
    NzTableModule,
    NzAutocompleteModule,
    NzInputModule,
    IconsProviderModule,
    NzSelectModule,
    FormsModule,
    NzButtonModule,
    NzDividerModule,
    NzGridModule,
    NzCarouselModule,
    ChartsModule
  ]
})
export class PlacesStatsModule { }
