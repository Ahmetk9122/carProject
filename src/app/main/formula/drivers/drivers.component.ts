import { Component, OnInit } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';
import { race } from 'rxjs';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { Circuit } from 'src/app/shared/models/circuit';
import { Driver } from 'src/app/shared/models/driver';
import { Race } from 'src/app/shared/models/race';
import { Round } from 'src/app/shared/models/round';
import { Year } from 'src/app/shared/models/year';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { DriverService } from 'src/app/shared/services/formula/driver.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {

  constructor(private driverService:DriverService  ,private dialogService:DialogService) { }
  drivers:Driver[]=[]
  years:Year[]=[]
  rounds:Round[]=[]
  raceResult?:Race;
  selectedYear:any=""
  selectedYearForRound:any=""
  selectedRound:any=""
  filterText: string = "";
  driverbyYearsValue:string="";
  public edited = false;
  drivershidden=false;
  isStatus:boolean=true;
  ngOnInit(): void {
    this.getYears();
    this.getRounds();
  }
  getDrivers (){
    
    this.driverService.getAllDrivers().subscribe((res)=>{
      this.drivers=res.MRData.DriverTable.Drivers
      this.drivershidden=true;
      this.edited = false;
      this.driverbyYearsValue="F1 "
    })
    }
    statuschange()
  {
    this.isStatus=false
  }
    
    detail(url:string){
      var options = new MatDialogConfig()
      options.width="80%",
      options.height="80%",
      
      options.data={value:url}
      this.dialogService.openDialog(DialogComponent,options)
    }
    detailCircuit(url?:any){
      var options = new MatDialogConfig()
      options.width="80%",
      options.height="90%",
      options.data={value:url}
      this.dialogService.openDialog(DialogComponent,options)
    }
    onFilterTextValueChanged(event: any) {
      var filter = event.target.value;
      this.filterText = filter
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

    getDriversByYears(){
      this.driverService.getDriversByYear(this.selectedYearForRound).subscribe((res)=>
      {
        this.drivers=res.MRData.DriverTable.Drivers
        this.drivershidden=true;
        this.edited = false;
        this.driverbyYearsValue=this.selectedYearForRound

      })
    }
    getDriversByYearAndRound(){
      this.driverService.getDriversByYearAndRound(this.selectedYearForRound , this.selectedRound).subscribe((res)=>
      {
        this.drivers=res.MRData.DriverTable.Drivers
      })
      
    }

    getResultByYearAndRound(){
      this.driverService.getResultByYearAndRound(this.selectedYearForRound , this.selectedRound).subscribe((res)=>
      {
        this.raceResult=res.MRData.RaceTable.Races[0]
      })
    }
    getResultandDriversByYearAndRound()
    {
      this.getDriversByYearAndRound()
      this.getResultByYearAndRound()
    }
    getResultandDriversByYearAndRoundforSpesific()
    {
      this.edited = true;
      this.drivershidden=true
      this.driverbyYearsValue=this.selectedYearForRound
      if(this.selectedRound==""&&this.selectedYearForRound=="")
      {

        this.getDrivers()
      }
      else if(this.selectedYearForRound!="" && this.selectedRound=="")
      {
        this.getDriversByYears()
      }
      else if(this.selectedYearForRound=="" && this.selectedRound!="")
      {
        this.drivershidden=false
      }
      else
      {
        this.getResultandDriversByYearAndRound()
      }

    }
  }
