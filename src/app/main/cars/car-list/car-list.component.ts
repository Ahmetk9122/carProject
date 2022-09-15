import { Component, OnInit } from '@angular/core';
import { CarProducer } from 'src/app/shared/models/car-producer';
import { CarProducerService } from 'src/app/shared/services/car/car-producer.service';
import { CarService } from 'src/app/shared/services/car/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  constructor(private carProducerService:CarProducerService,private carService:CarService) { }
  selectedValue:any=""
  ishidden:boolean=true
  producer:CarProducer[]=[]
  models:[]=[]
  ngOnInit(): void {
    this.getProducers()
  }

  getProducers(){
    this.carProducerService.getProducer().subscribe((res)=>{
      this.producer =res
    })
  }
  onChangesProducer(){
    if(this.selectedValue=="")
    {
      this.ishidden
    }
    else
    {
      this.ishidden=false
    }
  }
  getCarModel(){
    this.carService.carmodelValue=this.selectedValue
    this.carService.getCarModels().subscribe((res)=>
    {
      this.models=res
    })
  }


}
