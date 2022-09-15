import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Round } from '../../models/round';
import { Year } from '../../models/year';
import { FormulaBaseService } from './formula-base.service';

@Injectable({
  providedIn: 'root'
})
export class DriverService extends FormulaBaseService {
  constructor(private httpClient:HttpClient) {
    super();
  }
  getAllDrivers():Observable<any>{
    return this.httpClient.get(this.formulaUrl+"f1/drivers.json?=123&limit=854")
  }
  getYears():Observable<any>{
    return this.httpClient.get("http://localhost:3000/years")
  }
  getRounds():Observable<any>{
    return this.httpClient.get("http://localhost:3000/rounds")
  }
  getDriversByYear(selectedYear:Year):Observable<any>{
    return this.httpClient.get(this.formulaUrl+"f1/"+selectedYear+"/drivers.json?limit=854")
  }
  getDriversByYearAndRound(selectedYear:Year , selectedRounds:Round):Observable<any>{
    return this.httpClient.get(this.formulaUrl+"f1/"+selectedYear+"/"+selectedRounds+"/drivers.json")
  }

  getResultByYearAndRound(selectedYear:Year,selectedRound:Round):Observable<any>{
    return this.httpClient.get(this.formulaUrl+"f1/"+selectedYear+"/"+selectedRound+"/results.json")
  }

  getCurrentDriversStanding():Observable<any>{
    return  this.httpClient.get(this.formulaUrl+"f1/current/driverStandings.json")
  }

}
