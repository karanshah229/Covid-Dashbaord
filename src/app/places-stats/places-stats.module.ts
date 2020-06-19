import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacesStatsComponent } from './places-stats/places-stats.component';
import { PlacesStatsRoutingModule } from './places-stats-routing.module';



@NgModule({
  declarations: [PlacesStatsComponent],
  imports: [
    CommonModule,
    PlacesStatsRoutingModule
  ]
})
export class PlacesStatsModule { }
