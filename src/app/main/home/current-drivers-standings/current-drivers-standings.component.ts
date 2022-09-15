import { Component, OnInit } from '@angular/core';
import { DriverStanding } from 'src/app/shared/models/driver-standing';
import { StandingsTable } from 'src/app/shared/models/standings-table';
import { DriverService } from 'src/app/shared/services/formula/driver.service';

@Component({
  selector: 'app-current-drivers-standings',
  templateUrl: './current-drivers-standings.component.html',
  styleUrls: ['./current-drivers-standings.component.css']
})
export class CurrentDriversStandingsComponent implements OnInit {

  constructor(private driverService:DriverService) { }
  driversStanding?:DriverStanding[]=[]
  firstDriver?:DriverStanding
  secondDriver?:DriverStanding
  thirdDriver?:DriverStanding
  fourthDriver?:DriverStanding
  firstDriverConstructor?:string
  secondDriverConstructor?:string
  thirdDriverConstructor?:string
  fourthDriverConstructor?:string
  ngOnInit(): void {
    this.getCurrentDriversStanding()
  }
  getCurrentDriversStanding()
  {
    this.driverService.getCurrentDriversStanding().subscribe((res)=>{
      this.driversStanding=res.MRData.StandingsTable.StandingsLists[0].DriverStandings
      console.log("b",res.MRData.StandingsTable.StandingsLists[0].DriverStandings[0])
      this.firstDriver=res.MRData.StandingsTable.StandingsLists[0].DriverStandings[0]
      this.secondDriver=res.MRData.StandingsTable.StandingsLists[0].DriverStandings[1]
      this.thirdDriver=res.MRData.StandingsTable.StandingsLists[0].DriverStandings[2]
      this.fourthDriver=res.MRData.StandingsTable.StandingsLists[0].DriverStandings[3]
      this.firstDriverConstructor=this.firstDriver?.Constructors[0].name
      this.secondDriverConstructor=this.secondDriver?.Constructors[0].name
      this.thirdDriverConstructor=this.thirdDriver?.Constructors[0].name
      this.fourthDriverConstructor=this.fourthDriver?.Constructors[0].name
    })
    console.log(this.driversStanding)
  }
}
