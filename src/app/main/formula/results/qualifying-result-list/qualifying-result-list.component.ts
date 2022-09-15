import { Component, Input, OnInit } from '@angular/core';
import { RaceQualifying } from 'src/app/shared/models/race-qualifying';

@Component({
  selector: 'app-qualifying-result-list',
  templateUrl: './qualifying-result-list.component.html',
  styleUrls: ['./qualifying-result-list.component.css']
})
export class QualifyingResultListComponent implements OnInit {

  @Input() qualifyResult?:RaceQualifying;
  constructor() { }

  ngOnInit(): void {
  }

}
