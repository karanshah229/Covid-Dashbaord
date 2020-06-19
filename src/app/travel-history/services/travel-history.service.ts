import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { travelPersonDetails } from '../models/travelHistory.model';

@Injectable({
  providedIn: 'root'
})
export class TravelHistoryService {

  constructor(private http: HttpClient) { }

  getTravelHistory(){
    return this.http.get<travelPersonDetails>('https://api.covid19india.org/travel_history.json')
  }

}
