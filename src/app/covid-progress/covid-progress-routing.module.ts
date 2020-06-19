import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CovidProgressComponent } from './covid-progress/covid-progress.component';

const routes: Routes = [
  { path: '', component: CovidProgressComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CovidProgressRoutingModule { }
