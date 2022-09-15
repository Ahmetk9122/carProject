import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CircuitsComponent } from './circuits/circuits.component';
import { CurrentPointsDriverConstructorComponent } from './current-points-driver-constructor/current-points-driver-constructor.component';
import { DriversComponent } from './drivers/drivers.component';
import { FormulaComponent } from './formula.component';
import { RaceScheduleComponent } from './race-schedule/race-schedule.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  {
    path:"",component:FormulaComponent,
    children:[
      {path:"drivers",component:DriversComponent},
      {path:"circuits",component:CircuitsComponent},
      {path:"results",component:ResultsComponent},
      {path:"schedule",component:RaceScheduleComponent},
      {path:"points",component:CurrentPointsDriverConstructorComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormulaRoutingModule { }
