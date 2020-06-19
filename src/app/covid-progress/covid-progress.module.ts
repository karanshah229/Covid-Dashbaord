import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CovidProgressComponent } from './covid-progress/covid-progress.component';
import { CovidProgressRoutingModule } from './covid-progress-routing.module';


@NgModule({
  declarations: [CovidProgressComponent],
  imports: [
    CommonModule,
    CovidProgressRoutingModule
  ]
})
export class CovidProgressModule { }
