import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StateDistrictWiseService {

  constructor(private http: HttpClient) { }

  getStateDistrictWise(){
    return this.http.get('https://api.covid19india.org/state_district_wise.json')
  }
}
