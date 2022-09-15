import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { CarsComponent } from './cars.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { MatSelectModule} from '@angular/material/select'

@NgModule({
  declarations: [
    CarsComponent,
    CarListComponent,
    CarDetailComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    MatSelectModule
  ]
})
export class CarsModule { }
