import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TravelHistoryComponent } from './travel-history/travel-history.component';

const routes: Routes = [
  { path: '', component: TravelHistoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TravelHistoryRoutingModule { }
