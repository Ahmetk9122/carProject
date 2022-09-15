import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/shared/services/formula/counter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userCounter:any
  yearCounter:any
  driverCounter:any
  constructor(private counterService :CounterService ) { }

  ngOnInit(): void {
    this.getUsers()
    this.getYears()
    this.getAllDrivers()
  }
  
  getUsers(){
    this.counterService.getUsers().subscribe((res)=>{
      this.userCounter=res.length
    })
  }
  getYears(){
    this.counterService.getYears().subscribe((res)=>{
      this.yearCounter=res.length
    })
  }
  getAllDrivers(){
    this.counterService.getAllDrivers().subscribe((res)=>
    {
     this.driverCounter=res.MRData.total
    })
  }

}
