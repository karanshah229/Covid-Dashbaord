import { Component, OnInit } from '@angular/core';
import { TravelHistoryService } from '../services/travel-history.service';
import { travelPersonDetails, __travelPersonDetails } from '../models/travelHistory.model';

@Component({
  selector: 'app-travel-history',
  templateUrl: './travel-history.component.html',
  styleUrls: ['./travel-history.component.scss']
})
export class TravelHistoryComponent implements OnInit {
  travelHistory
  tableLoading: Boolean = false;
  displayData: __travelPersonDetails[]

  constructor(private $travelHistory: TravelHistoryService) { }

  ngOnInit(): void {
    this.show_data()
  }

  show_data(){
    this.tableLoading = true
    this.$travelHistory.getTravelHistory()
      .subscribe( (travel_history: travelPersonDetails) => {
        this.mapData(travel_history)
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
      let travel_obj = {
        accuracylocation: ele.accuracylocation || "No Info",
        address: ele.address || "No Info",
        datasource: ele.datasource || "No Info",
        latlong: ele.latlong || "No Info",
        modeoftravel: ele.modeoftravel || "No Info",
        placename: ele.placename || "No Info",
        type: ele.type || "No Info",
        date: date,
        time: time
      }
      this.travelHistory.push(travel_obj)
    })
    console.log(this.travelHistory)
  }

}
