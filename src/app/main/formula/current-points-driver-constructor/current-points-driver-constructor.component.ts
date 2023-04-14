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
      this.allConstructorList=res.MRData.StandingsTable.StandingsLists[0].ConstructorStandings
    })
  }
//#region carimage
carImageByConstructorIdByForDriver(value:DriverStanding):string{
  if(value.Constructors[0].constructorId=="red_bull")
  {
  return "../../../../assets/redbull.png"
  }
  else if(value.Constructors[0].constructorId=="ferrari")
  {
    return "../../../../assets/ferrari.png"
  }
  else if(value.Constructors[0].constructorId=="mercedes")
  {
    return "../../../../assets/mercedes.png"
  }
  else if(value.Constructors[0].constructorId=="alpine")
  {
    return "../../../../assets/alpine.png"
  }
  else if(value.Constructors[0].constructorId=="mclaren")
  {
    return "../../../../assets/mclaren.png"
  }
  else if(value.Constructors[0].constructorId=="alfa")
  {
    return "../../../../assets/alfaromeo.png"
  }
  else if(value.Constructors[0].constructorId=="alphatauri")
  {
    return "../../../../assets/alphatauri.png"
  }
  else if(value.Constructors[0].constructorId=="haas")
  {
    return "../../../../assets/haas.png"
  }
  else if(value.Constructors[0].constructorId=="williams")
  {
    return "../../../../assets/williams.png"
  }
  else if(value.Constructors[0].constructorId=="aston_martin")
  {
    return "../../../../assets/astonmartin.png"
  }
  else
  {  return ""
  }
}
carImageByConstructorIdByForConstructor(value:any):string{
  if(value.Constructor?.constructorId=="red_bull")
  {
  return "../../../../assets/redbull.png"
  }
  else if(value.Constructor?.constructorId=="ferrari")
  {
    return "../../../../assets/ferrari.png"
  }
  else if(value.Constructor?.constructorId=="mercedes")
  {
    return "../../../../assets/mercedes.png"
  }
  else if(value.Constructor?.constructorId=="alpine")
  {
    return "../../../../assets/alpine.png"
  }
  else if(value.Constructor?.constructorId=="mclaren")
  {
    return "../../../../assets/mclaren.png"
  }
  else if(value.Constructor?.constructorId=="alfa")
  {
    return "../../../../assets/alfaromeo.png"
  }
  else if(value.Constructor?.constructorId=="alphatauri")
  {
    return "../../../../assets/alphatauri.png"
  }
  else if(value.Constructor?.constructorId=="haas")
  {
    return "../../../../assets/haas.png"
  }
  else if(value.Constructor?.constructorId=="williams")
  {
    return "../../../../assets/williams.png"
  }
  else if(value.Constructor?.constructorId=="aston_martin")
  {
    return "../../../../assets/astonmartin.png"
  }
  else
  {  return ""
  }
}
//#endregion
}
