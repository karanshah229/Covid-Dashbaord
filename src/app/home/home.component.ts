import { Component, OnInit } from '@angular/core';
import { TimeSeriesStateWiseService } from 'src/services/time-series-state-wise.service';
import TimeSeriesStateWiseServiceModel, { StateWise } from 'src/models/TimeSeriesStateWiseService.model';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  total_confirmed: number
  total_active: number
  total_recovered: number
  total_deceased: number

  confirmed_today: number
  recovered_today: number
  deceased_today: number

  chartData:ChartDataSets[] = [
    { data: [], label: "Confirmed" },
    { data: [], label: "Active" },
    { data: [], label: "Recovered" },
    { data: [], label: "Deceased" }
  ]
  // chartOptions: { legend: { display: false, labels: { fontColor: 'black' } } }
  chartLabels:Label[] = []
  chartType = "line"
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

  // events
  chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  top3_states: any[] = []
  tableLoading = true

  doughnutChartLabels = ['Total Tested', 'Tested Positive'];
  doughnutChartData: number[] = []
  doughnutChartType = 'doughnut';

  constructor(
    private timeSeriesStateWiseService: TimeSeriesStateWiseService
  ) { }

  ngOnInit(): void {
    this.show_data()
    this.tableLoading = false
  }

  show_data(){
    this.timeSeriesStateWiseService.getTimeSeriesStateWise()
      .subscribe( (data: TimeSeriesStateWiseServiceModel) => {
        this.mapData(data)
      })
  }

  mapData(data: TimeSeriesStateWiseServiceModel){

    // Total, Active, Deceased and Recovered Cases
    // Daily Deceased and Recovered Cases
    let current = data.statewise[0]
    this.total_confirmed = parseInt(current.confirmed)
    this.total_recovered = parseInt(current.recovered)
    this.total_deceased = parseInt(current.deaths)
    this.total_active = parseInt(current.active)

    this.confirmed_today = parseInt(current.deltaconfirmed)
    this.recovered_today = parseInt(current.deltarecovered)
    this.deceased_today = parseInt(current.deltadeaths)

    // Everyday Data for Main Graph
    let caseTimeSeries = data.cases_time_series
    caseTimeSeries.forEach(el => {
      if(el.dailyconfirmed && el.dailydeceased && el.dailyrecovered){
        this.chartData[0].data.push(parseInt(el.dailyconfirmed))
        this.chartData[1].data.push(parseInt(el.dailydeceased))
        this.chartData[2].data.push(parseInt(el.dailyrecovered))

        let active_daily = parseInt(el.totalconfirmed) - parseInt(el.totalrecovered) - parseInt(el.totaldeceased)
        this.chartData[3].data.push(active_daily)

        this.chartLabels.push(el.date)
      }
    })

    // Data for Top 3 States with most active and confirmed cases
    let stateWise = data.statewise.slice(1, data.statewise.length)
    this.top3_states = [...stateWise].sort( (a,b) => {
      return (parseInt(b.active) + parseInt(b.confirmed)) - (parseInt(a.active) + parseInt(a.confirmed))
    }).slice(0, 3)
    this.tableLoading = false

    // Data for Doughnut Chart
    let tested = data.tested
    for(let i = tested.length - 1; i > 0; i--){
      if(tested[i].totalsamplestested && tested[i].totalpositivecases){
        this.doughnutChartData.push(parseInt(tested[i].totalsamplestested))
        this.doughnutChartData.push(parseInt(tested[i].totalpositivecases))
        break
      }
    }
  }

}
