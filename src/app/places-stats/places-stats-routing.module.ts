import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlacesStatsComponent } from './places-stats/places-stats.component';
import { PlacesStatsPlaceComponent } from './places-stats-place/places-stats-place.component';

const routes: Routes = [
  { path: '', component: PlacesStatsComponent },
  { path: ':state', component: PlacesStatsPlaceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlacesStatsRoutingModule { }
