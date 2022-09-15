import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { RaceResultDialogComponent } from 'src/app/shared/components/race-result-dialog/race-result-dialog.component';
import { Race } from 'src/app/shared/models/race';
import { RaceQualifying } from 'src/app/shared/models/race-qualifying';
import { Result } from 'src/app/shared/models/result';
import { Round } from 'src/app/shared/models/round';
import { Year } from 'src/app/shared/models/year';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { DriverService } from 'src/app/shared/services/formula/driver.service';
import { RaceResultService } from 'src/app/shared/services/formula/race-result.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  selectedYear:any=""
  years:Year[]=[]
  rounds:Round[]=[]
  selectedYearForRound:any=""
  selectedRound:any=""
  raceResult?:Race
  raceResults?:Result[]=[];
  driverRaceResult:any
  qualifyResult?:RaceQualifying;
  resulthidden:boolean=false
  constructor(private driverService:DriverService  ,private dialogService:DialogService , private raceResultService:RaceResultService) {

   }

  ngOnInit(): void { 
    this.getYears();
    this.getRounds();

  }
  getYears(){
    this.driverService.getYears().subscribe((res)=>{
        this.years=res
    })
      
  }
  getRounds(){
    this.driverService.getRounds().subscribe((res)=>{
        this.rounds=res
    })
      
  }

  getResultByYearAndRound(){
    this.driverService.getResultByYearAndRound(this.selectedYearForRound , this.selectedRound).subscribe((res)=>
    {
      this.raceResult=res.MRData.RaceTable.Races[0]

      this.raceResults=res.MRData.RaceTable.Races[0].Results
      this.driverRaceResult=JSON.parse(JSON.stringify(this.raceResult?.Results))
    })
  }

  detailCircuit(url?:any){
    var options = new MatDialogConfig()
    options.width="80%",
    options.height="80%",
    options.data={value:url}
    this.dialogService.openDialog(DialogComponent,options)
  }

  getQualifying(){
    this.raceResultService.getQualifying(this.selectedYearForRound,this.selectedRound).subscribe((res)=>
    {
      this.qualifyResult=res.MRData.RaceTable.Races[0]
    })
  }

  getResultandQualify()
  {
    this.getResultByYearAndRound(),
    this.getQualifying()
    this.resulthidden=true
  }

}
