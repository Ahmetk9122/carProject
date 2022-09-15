import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormulaBaseService } from './formula-base.service';

@Injectable({
  providedIn: 'root'
})
export class CircuitsService extends FormulaBaseService {

  constructor( private httpClient:HttpClient) {
    super();
  }

  getCircuits(selectedYear:any):Observable<any>
  {
    return this.httpClient.get(this.formulaUrl+"f1/"+selectedYear+"/circuits.json")
  }

}
