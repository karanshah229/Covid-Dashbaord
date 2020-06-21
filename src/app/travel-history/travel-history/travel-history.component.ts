import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TravelHistoryService } from '../services/travel-history.service';
import { travelPersonDetails, __travelPersonDetails } from '../models/travelHistory.model';

interface travelPersonDetails_cleaned {
  accuracylocation: string
  address: string
  datasource: string
  latlong: string
  modeoftravel: string
  placename: string
  type: string
  date: string
  time: string
}

@Component({
  selector: 'app-travel-history',
  templateUrl: './travel-history.component.html',
  styleUrls: ['./travel-history.component.scss']
})
export class TravelHistoryComponent implements OnInit {
  travelHistory_filtered
  travelHistory_copy
  travelHistory
  tableLoading: Boolean = false;
  displayData: __travelPersonDetails[]

  constructor(
    private $travelHistory: TravelHistoryService,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.show_data()
  }

  show_data(){
    this.tableLoading = true
    this.$travelHistory.getTravelHistory()
      .subscribe( (travel_history: travelPersonDetails) => {
        this.mapData(travel_history)
        this.travelHistory_copy = this.travelHistory
        this.tableLoading = false
      }, error => {
        console.log(error)
        this.tableLoading = false
        this.travelHistory = ['Error fetching data. Try again later. If it still persists contact admin']
      })
  }

  mapData(travel_history: travelPersonDetails){
    this.travelHistory = []
    travel_history.travel_history.forEach(ele => {
      let date = ele.timefrom.split(" ")[0]
      let time = ele.timefrom.split(" ")[1]
      let travel_obj:travelPersonDetails_cleaned = {
        accuracylocation: ele.accuracylocation || "No Info",
        address: ele.address || "No Info",
        datasource: ele.datasource || "No Info",
        latlong: ele.latlong || "No Info",
        modeoftravel: ele.modeoftravel || "No Info",
        placename: ele.placename || "No Info",
        type: ele.type || "No Info",
        date: date || "No Info",
        time: time || "No Info"
      }
      this.travelHistory.push(travel_obj)
    })
  }

  async applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.toString();
    if(filterValue.toLowerCase() == '') this.travelHistory = await this.travelHistory_copy
    else {
      this.travelHistory = this.travelHistory_copy
      this.travelHistory_filtered = await this.travelHistory.filter( (x:travelPersonDetails_cleaned) => {
        const values = Object.values(x)
        return values.some(el => el.toLowerCase().includes(filterValue.toLowerCase()))
      })
      this.travelHistory = this.travelHistory_filtered
    }
    this.changeDetectorRef.detectChanges()
  }

}
