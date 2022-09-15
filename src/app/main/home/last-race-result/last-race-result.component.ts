import { Component, OnInit } from '@angular/core';
import { Driver } from 'src/app/shared/models/driver';
import { Race } from 'src/app/shared/models/race';
import { Result } from 'src/app/shared/models/result';
import { RaceResultService } from 'src/app/shared/services/formula/race-result.service';

@Component({
  selector: 'app-last-race-result',
  templateUrl: './last-race-result.component.html',
  styleUrls: ['./last-race-result.component.css']
})
export class LastRaceResultComponent implements OnInit {
  lastRaceResult?:Race
  firstDriver?:Result
  secondDriver?:Result
  thirdDriver?:Result
  fourthDriver?:Result
  fifthDriver?:Result
 
  constructor(private raceResultService:RaceResultService) { }
  
  ngOnInit(): void {
    this.getLastRaceResult()
  }
  getLastRaceResult()
  {
    this.raceResultService.getLastRace().subscribe((res)=>
    {
      this.lastRaceResult=res.MRData.RaceTable.Races[0]
      this.firstDriver=res.MRData.RaceTable.Races[0].Results[0]
      this.secondDriver=res.MRData.RaceTable.Races[0].Results[1]
      this.thirdDriver=res.MRData.RaceTable.Races[0].Results[2]
      this.fourthDriver=res.MRData.RaceTable.Races[0].Results[3]
      this.fifthDriver=res.MRData.RaceTable.Races[0].Results[4]
    })
    
  }

}
