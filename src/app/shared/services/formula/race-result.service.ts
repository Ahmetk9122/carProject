import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormulaBaseService } from './formula-base.service';

@Injectable({
  providedIn: 'root'
})
export class RaceResultService extends FormulaBaseService {

  constructor(private httpClient:HttpClient) {
    super();
  }

  getQualifying(selectedYear:any,selectedRound:any):Observable<any>
  {
    return this.httpClient.get(this.formulaUrl+"f1/"+selectedYear+"/"+selectedRound+"/qualifying.json")
  }
  getLastRace():Observable<any>
  {
    return this.httpClient.get(this.formulaUrl+"f1/current/last/results.json")
  }
}
