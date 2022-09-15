import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Race } from '../../models/race';
import { Result } from '../../models/result';

@Component({
  selector: 'app-race-result-dialog',
  templateUrl: './race-result-dialog.component.html',
  styleUrls: ['./race-result-dialog.component.css']
})
export class RaceResultDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<any>,) { }
  position:any
  driverResult?:Result
  ngOnInit(): void {

    this.driverResult=this.data.raceResult;
  }

  closeDialog() {
    this.dialogRef.close(false);
  }


}
