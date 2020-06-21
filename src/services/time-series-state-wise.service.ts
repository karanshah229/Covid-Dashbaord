import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import TimeSeriesStateWiseServiceModel from 'src/models/TimeSeriesStateWiseService.model';

@Injectable({
  providedIn: 'root'
})
export class TimeSeriesStateWiseService {

  constructor(private http: HttpClient) { }

  getTimeSeriesStateWise(){
    return this.http.get<TimeSeriesStateWiseServiceModel>('https://api.covid19india.org/data.json')
  }

}
