import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarBaseService } from './car-base.service';

@Injectable({
  providedIn: 'root'
})
export class CarService extends CarBaseService {
  carmodelValue:string=""
  formdDataModel:any=new FormData()
  
  constructor(private httpClient:HttpClient) {
    super();
  }
  getCarModels():Observable<any>{
    this.formdDataModel.append("type","version")
    this.formdDataModel.append("val",this.carmodelValue)
    return this.httpClient.post(this.carUrl,this.formdDataModel)
  }
}
