import { Component, OnInit } from '@angular/core';
import { ConstructorStanding } from 'src/app/shared/models/constructor-standing';
import { StandingsList } from 'src/app/shared/models/standings-list';
import { ConstructorService } from 'src/app/shared/services/formula/constructor.service';

@Component({
  selector: 'app-current-constructors-standings',
  templateUrl: './current-constructors-standings.component.html',
  styleUrls: ['./current-constructors-standings.component.css']
})
export class CurrentConstructorsStandingsComponent implements OnInit {
  firstConstructor?:ConstructorStanding
  secondConstructor?:ConstructorStanding
  thirdConstructor?:ConstructorStanding
  fourthConstructor?:ConstructorStanding
  allConstructorList?:StandingsList
  constructor(private constructorService:ConstructorService) { }

  ngOnInit(): void {
    this.getCurrentConstructor()
  }

  getCurrentConstructor(){
    this.constructorService.getCurrentConstructor().subscribe((res)=>
    { 
      console.log("takımlar",res.MRData.StandingsTable.StandingsLists[0])
      this.allConstructorList=res.MRData.StandingsTable.StandingsLists[0]
      this.firstConstructor=res.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[0]
      this.secondConstructor=res.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[1]
      this.thirdConstructor=res.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[2]
      this.fourthConstructor=res.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[3]
    })
  }
}
