import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlacesStatsComponent } from './places-stats/places-stats.component';

const routes: Routes = [
  { path: '', component: PlacesStatsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlacesStatsRoutingModule { }
