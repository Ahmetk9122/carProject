import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormulaRoutingModule } from './formula-routing.module';
import { FormulaComponent } from './formula.component';
import { DriversComponent } from './drivers/drivers.component';
import { DriversFilterPipe } from './drivers/drivers-filter.pipe';
 import { MatSelectModule} from '@angular/material/select';
import { CircuitsComponent } from './circuits/circuits.component';
import { ResultsComponent } from './results/results.component';
import { RaceResultListComponent } from './results/race-result-list/race-result-list.component';
import { QualifyingResultListComponent } from './results/qualifying-result-list/qualifying-result-list.component';
import { RaceScheduleComponent } from './race-schedule/race-schedule.component';
import { CurrentPointsDriverConstructorComponent } from './current-points-driver-constructor/current-points-driver-constructor.component'

@NgModule({
  declarations: [
    FormulaComponent,
    DriversComponent,
    DriversFilterPipe,
    CircuitsComponent,
    ResultsComponent,
    RaceResultListComponent,
    QualifyingResultListComponent,
    RaceScheduleComponent,
    CurrentPointsDriverConstructorComponent
  ],
  imports: [
    CommonModule,
    FormulaRoutingModule,
    MatSelectModule
  ]
})
export class FormulaModule { }
