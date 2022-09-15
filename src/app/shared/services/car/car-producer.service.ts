import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { BaseService } from '../auths/base.service';

@Injectable({
  providedIn: 'root'
})
export class CarProducerService extends BaseService {

  constructor(private httpClient:HttpClient) {
    super();
  }

  public getProducer():Observable<any>
  {
    return this.httpClient.get(this.baseUrl+'/producers')
  }
}
