import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StateDistrictWiseService } from '../services/state-district-wise.service';
import { ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-places-stats-place',
  templateUrl: './places-stats-place.component.html',
  styleUrls: ['./places-stats-place.component.scss']
})
export class PlacesStatsPlaceComponent implements OnInit {
  state: string
  tableLoading = true

  stateData = {}

  constructor(
    private route: ActivatedRoute,
    private stateDistrictWise: StateDistrictWiseService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.state = params.get("state")
      console.log(this.state)
    })

    this.showData()
  }

  showData(){
    this.stateDistrictWise.getStateDistrictWise()
      .subscribe( (data:any) => {
        this.stateData = data
        let test = Object.values(data[this.state])
        console.log(this.stateData)
        console.log(test)
      })
  }

}
