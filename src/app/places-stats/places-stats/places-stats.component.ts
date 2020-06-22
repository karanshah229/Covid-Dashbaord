import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateDistrictWiseService } from '../services/state-district-wise.service';
import { ChartDataSets } from 'chart.js';
import { TimeSeriesStateWiseService } from 'src/services/time-series-state-wise.service';

@Component({
  selector: 'app-places-stats',
  templateUrl: './places-stats.component.html',
  styleUrls: ['./places-stats.component.scss']
})
export class PlacesStatsComponent implements OnInit {
  state:string
  stateData
  stateCodes: string[] = []
  states: string[] = []
  top3_states

  // Charts
  chartOptions = {
    responsive: true,
    pan: {
      enabled: true,
      mode: 'x',
    },
    zoom: {
      enabled: true,
      mode: 'x',
    },
    animation: {
      duration: 2000,
      easing: 'easeInOutQuad'
    },
  }

  // Chart Labels
  barChartLabels = [];

  // Highest State Chart
  highestStateData: ChartDataSets[] = [
    { data: [], label: 'Confirmed' },
    { data: [], label: 'Active' },
    { data: [], label: 'Recovered' },
    { data: [], label: 'Deceased' }
  ];

  constructor(
    private router: Router,
    private stateDistrictWise: StateDistrictWiseService,
    private timeSeriesStateWise: TimeSeriesStateWiseService
  ) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.stateDistrictWise.getStateDistrictWise()
      .subscribe( (data:any) => {
        this.stateData = data
        Object.values(this.stateData).forEach(obj => this.stateCodes.push(obj["statecode"]))
        this.states = Object.keys(this.stateData)
      })

    // Data for Top 3 States with most active and confirmed cases
    this.timeSeriesStateWise.getTimeSeriesStateWise()
      .subscribe(data => {
        let stateWise = data.statewise.slice(1, data.statewise.length)
        this.top3_states = [...stateWise].sort( (a,b) => {
          return (parseInt(b.active) + parseInt(b.confirmed)) - (parseInt(a.active) + parseInt(a.confirmed))
        }).slice(0, 3)
        this.top3_states.forEach(el => {
          this.highestStateData[0].data.push(el.confirmed)
          this.highestStateData[1].data.push(el.active)
          this.highestStateData[2].data.push(el.recovered)
          this.highestStateData[3].data.push(el.deaths)
          this.barChartLabels.push(el["state"])
        })
      })
  }

  view_stats(){
    this.router.navigateByUrl(`/places-stats/${this.state}`)
  }

}
