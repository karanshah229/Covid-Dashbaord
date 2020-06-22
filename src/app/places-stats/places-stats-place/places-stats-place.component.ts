import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StateDistrictWiseService } from '../services/state-district-wise.service';

@Component({
  selector: 'app-places-stats-place',
  templateUrl: './places-stats-place.component.html',
  styleUrls: ['./places-stats-place.component.scss']
})
export class PlacesStatsPlaceComponent implements OnInit {
  stateCode: string
  tableLoading = true

  stateData
  stateDataCopy
  stateData_filtered
  districts
  districtData:Object[]

  constructor(
    private route: ActivatedRoute,
    private stateDistrictWise: StateDistrictWiseService,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.stateCode = params.get("statecode")
    })

    this.showData()
  }

  showData(){
    this.stateDistrictWise.getStateDistrictWise()
      .subscribe( (data:any) => {
        this.stateData = data
        this.stateData = Object.values(this.stateData).filter( (state:any) => state.statecode == this.stateCode)
        this.stateData = this.stateData[0]['districtData']
        this.districts = Object.keys(this.stateData)
        this.districtData = Object.values(this.stateData)

        this.stateData = []
        for(let i = 0; i < this.districts.length; i++){
          this.stateData.push({
            districtName: this.districts[i],
            ...this.districtData[i]
          })
        }
        this.stateDataCopy = this.stateData
      })
    this.tableLoading = false
  }

  async applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.toString();
    if(filterValue.toLowerCase() == '') this.stateData = await this.stateDataCopy
    else {
      this.stateData = this.stateDataCopy
      this.stateData_filtered = await this.stateData.filter( (x:any) => {
        return x['districtName'].toLowerCase().includes(filterValue.toLowerCase())
      })
      this.stateData = this.stateData_filtered
    }
    this.changeDetectorRef.detectChanges()
  }

}
