import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from '../auths/base.service';

@Injectable({
  providedIn: 'root'
})
export class CounterService extends BaseService {

  constructor(private httpClient:HttpClient) {
    super();
  }

  public getUsers():Observable<any>
  {
    return this.httpClient.get(this.baseUrl+'/user')
  }
  public getYears():Observable<any>
  {
    return this.httpClient.get(this.baseUrl+'/years')
  }
  getAllDrivers():Observable<any>{
    return this.httpClient.get("http://ergast.com/api/f1/drivers.json?=123&limit=854")
  }
}
