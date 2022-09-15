import { Component, OnInit } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { Circuit } from 'src/app/shared/models/circuit';
import { Year } from 'src/app/shared/models/year';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { CircuitsService } from 'src/app/shared/services/formula/circuits.service';
import { DriverService } from 'src/app/shared/services/formula/driver.service';

@Component({
  selector: 'app-circuits',
  templateUrl: './circuits.component.html',
  styleUrls: ['./circuits.component.scss']
})
export class CircuitsComponent implements OnInit {
  selectedYear:any=""
  years:Year[]=[]
  circuits:Circuit[]=[];
  circuitshidden=false;
  selectedYearforTable:any=""
  constructor(private driverService:DriverService, private circuitsService:CircuitsService ,private dialogService:DialogService) { 

  }

  ngOnInit(): void {
    this.getYears();

  }

  detail(url:string){
    var options = new MatDialogConfig()
    options.width="80%",
    options.height="80%",
    
    options.data={value:url}
    this.dialogService.openDialog(DialogComponent,options)
  }

  getYears(){
    this.driverService.getYears().subscribe((res)=>{
        this.years=res
    })
      
  }

  getCircuits(){
    this.circuitsService.getCircuits(this.selectedYear).subscribe((res)=>
    {
      this.circuits=res.MRData.CircuitTable.Circuits
      console.log(this.circuits)
    })
    this.circuitshidden=true
    this.selectedYearforTable=this.selectedYear
  }

}
