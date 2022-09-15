import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService extends BaseService {

  constructor(private httpClient:HttpClient) {
    super();
  }


  public createAccount(register:any):Observable<any>
  {
    return this.httpClient.post(this.baseUrl+'/user',register)
  }
}
