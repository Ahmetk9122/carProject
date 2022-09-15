import { Component, OnInit } from '@angular/core';
import { Schedule } from 'src/app/shared/models/schedule';
import { ScheduleRaceTable } from 'src/app/shared/models/schedule-race-table';
import { ScheduleService } from 'src/app/shared/services/formula/schedule.service';

@Component({
  selector: 'app-race-schedule',
  templateUrl: './race-schedule.component.html',
  styleUrls: ['./race-schedule.component.css']
})
export class RaceScheduleComponent implements OnInit {

  constructor(private scheduleService:ScheduleService) { }
  currentSchedule?:ScheduleRaceTable
  ngOnInit(): void {
    this.getCurrentSchedule()
  }
  
  getCurrentSchedule(){
    this.scheduleService.getCurrentSchedule().subscribe((res)=>{
      this.currentSchedule=res.MRData.RaceTable
    })
  }
}
