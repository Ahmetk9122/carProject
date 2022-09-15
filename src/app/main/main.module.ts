import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { MenuComponent } from './layout/menu/menu.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MatIconModule} from "@angular/material/icon";
import { ContactComponent } from './contact/contact.component';
import { LastRaceResultComponent } from './home/last-race-result/last-race-result.component';
import { CurrentDriversStandingsComponent } from './home/current-drivers-standings/current-drivers-standings.component';
import { CurrentConstructorsStandingsComponent } from './home/current-constructors-standings/current-constructors-standings.component';
import { CarouselComponent } from './home/carousel/carousel.component';



@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    NavbarComponent,
    MenuComponent,
    FooterComponent,
    ContactComponent,
    LastRaceResultComponent,
    CurrentDriversStandingsComponent,
    CurrentConstructorsStandingsComponent,
    CarouselComponent,
    
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatIconModule
  ],
})
export class MainModule { }
