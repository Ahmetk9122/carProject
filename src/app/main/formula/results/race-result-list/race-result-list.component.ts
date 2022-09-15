import { Component, Input, OnInit } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';
import { RaceResultDialogComponent } from 'src/app/shared/components/race-result-dialog/race-result-dialog.component';
import { Race } from 'src/app/shared/models/race';
import { Result } from 'src/app/shared/models/result';
import { DialogService } from 'src/app/shared/services/dialog.service';

@Component({
  selector: 'app-race-result-list',
  templateUrl: './race-result-list.component.html',
  styleUrls: ['./race-result-list.component.css']
})
export class RaceResultListComponent implements OnInit {
  @Input() driverRaceResult:any
  @Input()  raceResults?:Result[]=[];
  constructor(private dialogService:DialogService) {
   
   }
 
  ngOnInit(): void {
  }

  detail(raceResult:Result)
  {

    var options = new MatDialogConfig()
    options.width="80%",
    options.height="80%",
    
    options.data={ raceResult:raceResult }
    this.dialogService.openDialog(RaceResultDialogComponent,options)
  }
}
