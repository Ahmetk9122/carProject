import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService {
  public user:any;
  
  constructor(private httpClient:HttpClient) {
    
    super();
  }
  public getUser(email:string):Observable<any>
  {
    return this.httpClient.get(this.baseUrl+'/user?email='+email)
  }
}
  
