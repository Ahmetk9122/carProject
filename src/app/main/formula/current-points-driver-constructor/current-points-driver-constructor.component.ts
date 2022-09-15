import { Component, OnInit } from '@angular/core';
import { ConstructorStanding } from 'src/app/shared/models/constructor-standing';
import { DriverStanding } from 'src/app/shared/models/driver-standing';
import { StandingsList } from 'src/app/shared/models/standings-list';
import { ConstructorService } from 'src/app/shared/services/formula/constructor.service';
import { DriverService } from 'src/app/shared/services/formula/driver.service';

@Component({
  selector: 'app-current-points-driver-constructor',
  templateUrl: './current-points-driver-constructor.component.html',
  styleUrls: ['./current-points-driver-constructor.component.css']
})
export class CurrentPointsDriverConstructorComponent implements OnInit {

  constructor(private driverService:DriverService,private constructorService:ConstructorService) { }
  driversStanding?:DriverStanding[]=[]
  allConstructorList?:any
  ngOnInit(): void {
    this.getCurrentDriversStanding()
    this.getCurrentConstructor()
  }

  getCurrentDriversStanding()
  {
    this.driverService.getCurrentDriversStanding().subscribe((res)=>{
      this.driversStanding=res.MRData.StandingsTable.StandingsLists[0].DriverStandings
    })
  }
  getCurrentConstructor(){
    this.constructorService.getCurrentConstructor().subscribe((res)=>
    { 
      console.log("takımlar",res.MRData.StandingsTable.StandingsLists[0].ConstructorStandings)
      this.allConstructorList=res.MRData.StandingsTable.StandingsLists[0].ConstructorStandings
    })
  }
}
