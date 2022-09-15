import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormulaBaseService } from './formula-base.service';

@Injectable({
  providedIn: 'root'
})
export class ConstructorService extends FormulaBaseService {

  constructor(private httpClient:HttpClient) {
    super();
  }

  getCurrentConstructor():Observable<any>
  {
    return this.httpClient.get(this.formulaUrl+"f1/current/constructorStandings.json")
  }

}
