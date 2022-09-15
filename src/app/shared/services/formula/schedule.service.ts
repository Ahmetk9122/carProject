import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormulaBaseService } from './formula-base.service';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService extends FormulaBaseService {

  constructor(private httpClient:HttpClient) {
    super();
  }

  getCurrentSchedule():Observable<any>{
   return this.httpClient.get(this.formulaUrl+"f1/current.json")
  }
}
