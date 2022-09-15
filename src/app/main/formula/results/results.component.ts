import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { RaceResultDialogComponent } from 'src/app/shared/components/race-result-dialog/race-result-dialog.component';
import { Race } from 'src/app/shared/models/race';
import { RaceQualifying } from 'src/app/shared/models/race-qualifying';
import { Result } from 'src/app/shared/models/result';
import { Round } from 'src/app/shared/models/round';
import { Year } from 'src/app/shared/models/year';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { DriverService } from 'src/app/shared/services/formula/driver.service';
import { RaceResultService } from 'src/app/shared/services/formula/race-result.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  selectedYear:any=""
  years:Year[]=[]
  rounds:Round[]=[]
  selectedYearForRound:any=""
  selectedRound:any=""
  raceResult?:Race
  raceResults?:Result[]=[];
  driverRaceResult:any
  qualifyResult?:RaceQualifying;
  resulthidden:boolean=false
  constructor(private driverService:DriverService  ,private dialogService:DialogService , private raceResultService:RaceResultService) {

    //  this.driverRaceResult=[
    // //   {
    // //     "number": "44",
    // //     "position": "1",
    // //     "positionText": "1",
    // //     "points": "26",
    // //     "Driver": {
    // //       "driverId": "hamilton",
    // //       "permanentNumber": "44",
    // //       "code": "HAM",
    // //       "url": "http://en.wikipedia.org/wiki/Lewis_Hamilton",
    // //       "givenName": "Lewis",
    // //       "familyName": "Hamilton",
    // //       "dateOfBirth": "1985-01-07",
    // //       "nationality": "British"
    // //     },
    // //     "Constructor": {
    // //       "constructorId": "mercedes",
    // //       "url": "http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One",
    // //       "name": "Mercedes",
    // //       "nationality": "German"
    // //     },
    // //     "grid": "1",
    // //     "laps": "70",
    // //     "status": "Finished",
    // //     "Time": {
    // //       "millis": "5772473",
    // //       "time": "1:36:12.473"
    // //     },
    // //     "FastestLap": {
    // //       "rank": "1",
    // //       "lap": "70",
    // //       "Time": {
    // //         "time": "1:16.627"
    // //       },
    // //       "AverageSpeed": {
    // //         "units": "kph",
    // //         "speed": "205.823"
    // //       }
    // //     }
    // //   },
    // //   {
    // //     "number": "33",
    // //     "position": "2",
    // //     "positionText": "2",
    // //     "points": "18",
    // //     "Driver": {
    // //       "driverId": "max_verstappen",
    // //       "permanentNumber": "33",
    // //       "code": "VER",
    // //       "url": "http://en.wikipedia.org/wiki/Max_Verstappen",
    // //       "givenName": "Max",
    // //       "familyName": "Verstappen",
    // //       "dateOfBirth": "1997-09-30",
    // //       "nationality": "Dutch"
    // //     },
    // //     "Constructor": {
    // //       "constructorId": "red_bull",
    // //       "url": "http://en.wikipedia.org/wiki/Red_Bull_Racing",
    // //       "name": "Red Bull",
    // //       "nationality": "Austrian"
    // //     },
    // //     "grid": "7",
    // //     "laps": "70",
    // //     "status": "Finished",
    // //     "Time": {
    // //       "millis": "5781175",
    // //       "time": "+8.702"
    // //     },
    // //     "FastestLap": {
    // //       "rank": "4",
    // //       "lap": "60",
    // //       "Time": {
    // //         "time": "1:19.184"
    // //       },
    // //       "AverageSpeed": {
    // //         "units": "kph",
    // //         "speed": "199.176"
    // //       }
    // //     }
    // //   },
    // //   {
    // //     "number": "77",
    // //     "position": "3",
    // //     "positionText": "3",
    // //     "points": "15",
    // //     "Driver": {
    // //       "driverId": "bottas",
    // //       "permanentNumber": "77",
    // //       "code": "BOT",
    // //       "url": "http://en.wikipedia.org/wiki/Valtteri_Bottas",
    // //       "givenName": "Valtteri",
    // //       "familyName": "Bottas",
    // //       "dateOfBirth": "1989-08-28",
    // //       "nationality": "Finnish"
    // //     },
    // //     "Constructor": {
    // //       "constructorId": "mercedes",
    // //       "url": "http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One",
    // //       "name": "Mercedes",
    // //       "nationality": "German"
    // //     },
    // //     "grid": "2",
    // //     "laps": "70",
    // //     "status": "Finished",
    // //     "Time": {
    // //       "millis": "5781925",
    // //       "time": "+9.452"
    // //     },
    // //     "FastestLap": {
    // //       "rank": "2",
    // //       "lap": "66",
    // //       "Time": {
    // //         "time": "1:17.665"
    // //       },
    // //       "AverageSpeed": {
    // //         "units": "kph",
    // //         "speed": "203.072"
    // //       }
    // //     }
    // //   },
    // //   {
    // //     "number": "18",
    // //     "position": "4",
    // //     "positionText": "4",
    // //     "points": "12",
    // //     "Driver": {
    // //       "driverId": "stroll",
    // //       "permanentNumber": "18",
    // //       "code": "STR",
    // //       "url": "http://en.wikipedia.org/wiki/Lance_Stroll",
    // //       "givenName": "Lance",
    // //       "familyName": "Stroll",
    // //       "dateOfBirth": "1998-10-29",
    // //       "nationality": "Canadian"
    // //     },
    // //     "Constructor": {
    // //       "constructorId": "racing_point",
    // //       "url": "http://en.wikipedia.org/wiki/Racing_Point_F1_Team",
    // //       "name": "Racing Point",
    // //       "nationality": "British"
    // //     },
    // //     "grid": "3",
    // //     "laps": "70",
    // //     "status": "Finished",
    // //     "Time": {
    // //       "millis": "5830052",
    // //       "time": "+57.579"
    // //     },
    // //     "FastestLap": {
    // //       "rank": "3",
    // //       "lap": "68",
    // //       "Time": {
    // //         "time": "1:18.973"
    // //       },
    // //       "AverageSpeed": {
    // //         "units": "kph",
    // //         "speed": "199.708"
    // //       }
    // //     }
    // //   },
    // //   {
    // //     "number": "23",
    // //     "position": "5",
    // //     "positionText": "5",
    // //     "points": "10",
    // //     "Driver": {
    // //       "driverId": "albon",
    // //       "permanentNumber": "23",
    // //       "code": "ALB",
    // //       "url": "http://en.wikipedia.org/wiki/Alexander_Albon",
    // //       "givenName": "Alexander",
    // //       "familyName": "Albon",
    // //       "dateOfBirth": "1996-03-23",
    // //       "nationality": "Thai"
    // //     },
    // //     "Constructor": {
    // //       "constructorId": "red_bull",
    // //       "url": "http://en.wikipedia.org/wiki/Red_Bull_Racing",
    // //       "name": "Red Bull",
    // //       "nationality": "Austrian"
    // //     },
    // //     "grid": "13",
    // //     "laps": "70",
    // //     "status": "Finished",
    // //     "Time": {
    // //       "millis": "5850789",
    // //       "time": "+1:18.316"
    // //     },
    // //     "FastestLap": {
    // //       "rank": "5",
    // //       "lap": "68",
    // //       "Time": {
    // //         "time": "1:19.440"
    // //       },
    // //       "AverageSpeed": {
    // //         "units": "kph",
    // //         "speed": "198.534"
    // //       }
    // //     }
    // //   },
    // //   {
    // //     "number": "5",
    // //     "position": "6",
    // //     "positionText": "6",
    // //     "points": "8",
    // //     "Driver": {
    // //       "driverId": "vettel",
    // //       "permanentNumber": "5",
    // //       "code": "VET",
    // //       "url": "http://en.wikipedia.org/wiki/Sebastian_Vettel",
    // //       "givenName": "Sebastian",
    // //       "familyName": "Vettel",
    // //       "dateOfBirth": "1987-07-03",
    // //       "nationality": "German"
    // //     },
    // //     "Constructor": {
    // //       "constructorId": "ferrari",
    // //       "url": "http://en.wikipedia.org/wiki/Scuderia_Ferrari",
    // //       "name": "Ferrari",
    // //       "nationality": "Italian"
    // //     },
    // //     "grid": "5",
    // //     "laps": "69",
    // //     "status": "+1 Lap",
    // //     "FastestLap": {
    // //       "rank": "14",
    // //       "lap": "49",
    // //       "Time": {
    // //         "time": "1:20.363"
    // //       },
    // //       "AverageSpeed": {
    // //         "units": "kph",
    // //         "speed": "196.254"
    // //       }
    // //     }
    // //   },
    // //   {
    // //     "number": "11",
    // //     "position": "7",
    // //     "positionText": "7",
    // //     "points": "6",
    // //     "Driver": {
    // //       "driverId": "perez",
    // //       "permanentNumber": "11",
    // //       "code": "PER",
    // //       "url": "http://en.wikipedia.org/wiki/Sergio_P%C3%A9rez",
    // //       "givenName": "Sergio",
    // //       "familyName": "Pérez",
    // //       "dateOfBirth": "1990-01-26",
    // //       "nationality": "Mexican"
    // //     },
    // //     "Constructor": {
    // //       "constructorId": "racing_point",
    // //       "url": "http://en.wikipedia.org/wiki/Racing_Point_F1_Team",
    // //       "name": "Racing Point",
    // //       "nationality": "British"
    // //     },
    // //     "grid": "4",
    // //     "laps": "69",
    // //     "status": "+1 Lap",
    // //     "FastestLap": {
    // //       "rank": "10",
    // //       "lap": "39",
    // //       "Time": {
    // //         "time": "1:20.090"
    // //       },
    // //       "AverageSpeed": {
    // //         "units": "kph",
    // //         "speed": "196.923"
    // //       }
    // //     }
    // //   },
    // //   {
    // //     "number": "3",
    // //     "position": "8",
    // //     "positionText": "8",
    // //     "points": "4",
    // //     "Driver": {
    // //       "driverId": "ricciardo",
    // //       "permanentNumber": "3",
    // //       "code": "RIC",
    // //       "url": "http://en.wikipedia.org/wiki/Daniel_Ricciardo",
    // //       "givenName": "Daniel",
    // //       "familyName": "Ricciardo",
    // //       "dateOfBirth": "1989-07-01",
    // //       "nationality": "Australian"
    // //     },
    // //     "Constructor": {
    // //       "constructorId": "renault",
    // //       "url": "http://en.wikipedia.org/wiki/Renault_in_Formula_One",
    // //       "name": "Renault",
    // //       "nationality": "French"
    // //     },
    // //     "grid": "11",
    // //     "laps": "69",
    // //     "status": "+1 Lap",
    // //     "FastestLap": {
    // //       "rank": "7",
    // //       "lap": "46",
    // //       "Time": {
    // //         "time": "1:19.532"
    // //       },
    // //       "AverageSpeed": {
    // //         "units": "kph",
    // //         "speed": "198.305"
    // //       }
    // //     }
    // //   },
    // //   {
    // //     "number": "55",
    // //     "position": "9",
    // //     "positionText": "9",
    // //     "points": "2",
    // //     "Driver": {
    // //       "driverId": "sainz",
    // //       "permanentNumber": "55",
    // //       "code": "SAI",
    // //       "url": "http://en.wikipedia.org/wiki/Carlos_Sainz_Jr.",
    // //       "givenName": "Carlos",
    // //       "familyName": "Sainz",
    // //       "dateOfBirth": "1994-09-01",
    // //       "nationality": "Spanish"
    // //     },
    // //     "Constructor": {
    // //       "constructorId": "mclaren",
    // //       "url": "http://en.wikipedia.org/wiki/McLaren",
    // //       "name": "McLaren",
    // //       "nationality": "British"
    // //     },
    // //     "grid": "9",
    // //     "laps": "69",
    // //     "status": "+1 Lap",
    // //     "FastestLap": {
    // //       "rank": "15",
    // //       "lap": "68",
    // //       "Time": {
    // //         "time": "1:20.477"
    // //       },
    // //       "AverageSpeed": {
    // //         "units": "kph",
    // //         "speed": "195.976"
    // //       }
    // //     }
    // //   },
    // //   {
    // //     "number": "20",
    // //     "position": "10",
    // //     "positionText": "10",
    // //     "points": "1",
    // //     "Driver": {
    // //       "driverId": "kevin_magnussen",
    // //       "permanentNumber": "20",
    // //       "code": "MAG",
    // //       "url": "http://en.wikipedia.org/wiki/Kevin_Magnussen",
    // //       "givenName": "Kevin",
    // //       "familyName": "Magnussen",
    // //       "dateOfBirth": "1992-10-05",
    // //       "nationality": "Danish"
    // //     },
    // //     "Constructor": {
    // //       "constructorId": "haas",
    // //       "url": "http://en.wikipedia.org/wiki/Haas_F1_Team",
    // //       "name": "Haas F1 Team",
    // //       "nationality": "American"
    // //     },
    // //     "grid": "0",
    // //     "laps": "69",
    // //     "status": "+1 Lap",
    // //     "FastestLap": {
    // //       "rank": "6",
    // //       "lap": "67",
    // //       "Time": {
    // //         "time": "1:19.457"
    // //       },
    // //       "AverageSpeed": {
    // //         "units": "kph",
    // //         "speed": "198.492"
    // //       }
    // //     }
    // //   },
    // //   {
    // //     "number": "16",
    // //     "position": "11",
    // //     "positionText": "11",
    // //     "points": "0",
    // //     "Driver": {
    // //       "driverId": "leclerc",
    // //       "permanentNumber": "16",
    // //       "code": "LEC",
    // //       "url": "http://en.wikipedia.org/wiki/Charles_Leclerc",
    // //       "givenName": "Charles",
    // //       "familyName": "Leclerc",
    // //       "dateOfBirth": "1997-10-16",
    // //       "nationality": "Monegasque"
    // //     },
    // //     "Constructor": {
    // //       "constructorId": "ferrari",
    // //       "url": "http://en.wikipedia.org/wiki/Scuderia_Ferrari",
    // //       "name": "Ferrari",
    // //       "nationality": "Italian"
    // //     },
    // //     "grid": "6",
    // //     "laps": "69",
    // //     "status": "+1 Lap",
    // //     "FastestLap": {
    // //       "rank": "16",
    // //       "lap": "64",
    // //       "Time": {
    // //         "time": "1:20.821"
    // //       },
    // //       "AverageSpeed": {
    // //         "units": "kph",
    // //         "speed": "195.142"
    // //       }
    // //     }
    // //   },
    // //   {
    // //     "number": "26",
    // //     "position": "12",
    // //     "positionText": "12",
    // //     "points": "0",
    // //     "Driver": {
    // //       "driverId": "kvyat",
    // //       "permanentNumber": "26",
    // //       "code": "KVY",
    // //       "url": "http://en.wikipedia.org/wiki/Daniil_Kvyat",
    // //       "givenName": "Daniil",
    // //       "familyName": "Kvyat",
    // //       "dateOfBirth": "1994-04-26",
    // //       "nationality": "Russian"
    // //     },
    // //     "Constructor": {
    // //       "constructorId": "alphatauri",
    // //       "url": "http://en.wikipedia.org/wiki/Scuderia_AlphaTauri",
    // //       "name": "AlphaTauri",
    // //       "nationality": "Italian"
    // //     },
    // //     "grid": "17",
    // //     "laps": "69",
    // //     "status": "+1 Lap",
    // //     "FastestLap": {
    // //       "rank": "18",
    // //       "lap": "51",
    // //       "Time": {
    // //         "time": "1:20.946"
    // //       },
    // //       "AverageSpeed": {
    // //         "units": "kph",
    // //         "speed": "194.841"
    // //       }
    // //     }
    // //   },
    // //   {
    // //     "number": "4",
    // //     "position": "13",
    // //     "positionText": "13",
    // //     "points": "0",
    // //     "Driver": {
    // //       "driverId": "norris",
    // //       "permanentNumber": "4",
    // //       "code": "NOR",
    // //       "url": "http://en.wikipedia.org/wiki/Lando_Norris",
    // //       "givenName": "Lando",
    // //       "familyName": "Norris",
    // //       "dateOfBirth": "1999-11-13",
    // //       "nationality": "British"
    // //     },
    // //     "Constructor": {
    // //       "constructorId": "mclaren",
    // //       "url": "http://en.wikipedia.org/wiki/McLaren",
    // //       "name": "McLaren",
    // //       "nationality": "British"
    // //     },
    // //     "grid": "8",
    // //     "laps": "69",
    // //     "status": "+1 Lap",
    // //     "FastestLap": {
    // //       "rank": "8",
    // //       "lap": "42",
    // //       "Time": {
    // //         "time": "1:19.945"
    // //       },
    // //       "AverageSpeed": {
    // //         "units": "kph",
    // //         "speed": "197.280"
    // //       }
    // //     }
    // //   },
    // //   {
    // //     "number": "31",
    // //     "position": "14",
    // //     "positionText": "14",
    // //     "points": "0",
    // //     "Driver": {
    // //       "driverId": "ocon",
    // //       "permanentNumber": "31",
    // //       "code": "OCO",
    // //       "url": "http://en.wikipedia.org/wiki/Esteban_Ocon",
    // //       "givenName": "Esteban",
    // //       "familyName": "Ocon",
    // //       "dateOfBirth": "1996-09-17",
    // //       "nationality": "French"
    // //     },
    // //     "Constructor": {
    // //       "constructorId": "renault",
    // //       "url": "http://en.wikipedia.org/wiki/Renault_in_Formula_One",
    // //       "name": "Renault",
    // //       "nationality": "French"
    // //     },
    // //     "grid": "14",
    // //     "laps": "69",
    // //     "status": "+1 Lap",
    // //     "FastestLap": {
    // //       "rank": "13",
    // //       "lap": "40",
    // //       "Time": {
    // //         "time": "1:20.261"
    // //       },
    // //       "AverageSpeed": {
    // //         "units": "kph",
    // //         "speed": "196.503"
    // //       }
    // //     }
    // //   },
    // //   {
    // //     "number": "7",
    // //     "position": "15",
    // //     "positionText": "15",
    // //     "points": "0",
    // //     "Driver": {
    // //       "driverId": "raikkonen",
    // //       "permanentNumber": "7",
    // //       "code": "RAI",
    // //       "url": "http://en.wikipedia.org/wiki/Kimi_R%C3%A4ikk%C3%B6nen",
    // //       "givenName": "Kimi",
    // //       "familyName": "Räikkönen",
    // //       "dateOfBirth": "1979-10-17",
    // //       "nationality": "Finnish"
    // //     },
    // //     "Constructor": {
    // //       "constructorId": "alfa",
    // //       "url": "http://en.wikipedia.org/wiki/Alfa_Romeo_in_Formula_One",
    // //       "name": "Alfa Romeo",
    // //       "nationality": "Swiss"
    // //     },
    // //     "grid": "20",
    // //     "laps": "69",
    // //     "status": "+1 Lap",
    // //     "FastestLap": {
    // //       "rank": "17",
    // //       "lap": "67",
    // //       "Time": {
    // //         "time": "1:20.889"
    // //       },
    // //       "AverageSpeed": {
    // //         "units": "kph",
    // //         "speed": "194.978"
    // //       }
    // //     }
    // //   },
    // //   {
    // //     "number": "8",
    // //     "position": "16",
    // //     "positionText": "16",
    // //     "points": "0",
    // //     "Driver": {
    // //       "driverId": "grosjean",
    // //       "permanentNumber": "8",
    // //       "code": "GRO",
    // //       "url": "http://en.wikipedia.org/wiki/Romain_Grosjean",
    // //       "givenName": "Romain",
    // //       "familyName": "Grosjean",
    // //       "dateOfBirth": "1986-04-17",
    // //       "nationality": "French"
    // //     },
    // //     "Constructor": {
    // //       "constructorId": "haas",
    // //       "url": "http://en.wikipedia.org/wiki/Haas_F1_Team",
    // //       "name": "Haas F1 Team",
    // //       "nationality": "American"
    // //     },
    // //     "grid": "0",
    // //     "laps": "69",
    // //     "status": "+1 Lap",
    // //     "FastestLap": {
    // //       "rank": "12",
    // //       "lap": "61",
    // //       "Time": {
    // //         "time": "1:20.232"
    // //       },
    // //       "AverageSpeed": {
    // //         "units": "kph",
    // //         "speed": "196.574"
    // //       }
    // //     }
    // //   },
    // //   {
    // //     "number": "99",
    // //     "position": "17",
    // //     "positionText": "17",
    // //     "points": "0",
    // //     "Driver": {
    // //       "driverId": "giovinazzi",
    // //       "permanentNumber": "99",
    // //       "code": "GIO",
    // //       "url": "http://en.wikipedia.org/wiki/Antonio_Giovinazzi",
    // //       "givenName": "Antonio",
    // //       "familyName": "Giovinazzi",
    // //       "dateOfBirth": "1993-12-14",
    // //       "nationality": "Italian"
    // //     },
    // //     "Constructor": {
    // //       "constructorId": "alfa",
    // //       "url": "http://en.wikipedia.org/wiki/Alfa_Romeo_in_Formula_One",
    // //       "name": "Alfa Romeo",
    // //       "nationality": "Swiss"
    // //     },
    // //     "grid": "19",
    // //     "laps": "69",
    // //     "status": "+1 Lap",
    // //     "FastestLap": {
    // //       "rank": "11",
    // //       "lap": "44",
    // //       "Time": {
    // //         "time": "1:20.096"
    // //       },
    // //       "AverageSpeed": {
    // //         "units": "kph",
    // //         "speed": "196.908"
    // //       }
    // //     }
    // //   },
    // //   {
    // //     "number": "63",
    // //     "position": "18",
    // //     "positionText": "18",
    // //     "points": "0",
    // //     "Driver": {
    // //       "driverId": "russell",
    // //       "permanentNumber": "63",
    // //       "code": "RUS",
    // //       "url": "http://en.wikipedia.org/wiki/George_Russell_%28racing_driver%29",
    // //       "givenName": "George",
    // //       "familyName": "Russell",
    // //       "dateOfBirth": "1998-02-15",
    // //       "nationality": "British"
    // //     },
    // //     "Constructor": {
    // //       "constructorId": "williams",
    // //       "url": "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
    // //       "name": "Williams",
    // //       "nationality": "British"
    // //     },
    // //     "grid": "12",
    // //     "laps": "69",
    // //     "status": "+1 Lap",
    // //     "FastestLap": {
    // //       "rank": "9",
    // //       "lap": "67",
    // //       "Time": {
    // //         "time": "1:19.984"
    // //       },
    // //       "AverageSpeed": {
    // //         "units": "kph",
    // //         "speed": "197.184"
    // //       }
    // //     }
    // //   },
    // //   {
    // //     "number": "6",
    // //     "position": "19",
    // //     "positionText": "19",
    // //     "points": "0",
    // //     "Driver": {
    // //       "driverId": "latifi",
    // //       "permanentNumber": "6",
    // //       "code": "LAT",
    // //       "url": "http://en.wikipedia.org/wiki/Nicholas_Latifi",
    // //       "givenName": "Nicholas",
    // //       "familyName": "Latifi",
    // //       "dateOfBirth": "1995-06-29",
    // //       "nationality": "Canadian"
    // //     },
    // //     "Constructor": {
    // //       "constructorId": "williams",
    // //       "url": "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
    // //       "name": "Williams",
    // //       "nationality": "British"
    // //     },
    // //     "grid": "15",
    // //     "laps": "65",
    // //     "status": "+5 Laps",
    // //     "FastestLap": {
    // //       "rank": "19",
    // //       "lap": "64",
    // //       "Time": {
    // //         "time": "1:21.198"
    // //       },
    // //       "AverageSpeed": {
    // //         "units": "kph",
    // //         "speed": "194.236"
    // //       }
    // //     }
    // //   },
    // //   {
    // //     "number": "10",
    // //     "position": "20",
    // //     "positionText": "R",
    // //     "points": "0",
    // //     "Driver": {
    // //       "driverId": "gasly",
    // //       "permanentNumber": "10",
    // //       "code": "GAS",
    // //       "url": "http://en.wikipedia.org/wiki/Pierre_Gasly",
    // //       "givenName": "Pierre",
    // //       "familyName": "Gasly",
    // //       "dateOfBirth": "1996-02-07",
    // //       "nationality": "French"
    // //     },
    // //     "Constructor": {
    // //       "constructorId": "alphatauri",
    // //       "url": "http://en.wikipedia.org/wiki/Scuderia_AlphaTauri",
    // //       "name": "AlphaTauri",
    // //       "nationality": "Italian"
    // //     },
    // //     "grid": "10",
    // //     "laps": "15",
    // //     "status": "Engine",
    // //     "FastestLap": {
    // //       "rank": "20",
    // //       "lap": "10",
    // //       "Time": {
    // //         "time": "1:23.939"
    // //       },
    // //       "AverageSpeed": {
    // //         "units": "kph",
    // //         "speed": "187.893"
    // //       }
    // //     }
    // //   }
    // // ]

    //  this.detail(1)

   }

  ngOnInit(): void { 
    this.getYears();
    this.getRounds();
    console.log("dialog veri",this.driverRaceResult)

  }
  getYears(){
    this.driverService.getYears().subscribe((res)=>{
        this.years=res
    })
      
  }
  getRounds(){
    this.driverService.getRounds().subscribe((res)=>{
        this.rounds=res
    })
      
  }

  getResultByYearAndRound(){
    this.driverService.getResultByYearAndRound(this.selectedYearForRound , this.selectedRound).subscribe((res)=>
    {
      this.raceResult=res.MRData.RaceTable.Races[0]
      debugger
      this.raceResults=res.MRData.RaceTable.Races[0].Results
      console.log("sonuc",this.raceResult)
      this.driverRaceResult=JSON.parse(JSON.stringify(this.raceResult?.Results))
    })
  }

  detailCircuit(url?:any){
    var options = new MatDialogConfig()
    options.width="80%",
    options.height="80%",
    options.data={value:url}
    this.dialogService.openDialog(DialogComponent,options)
  }

  getQualifying(){
    this.raceResultService.getQualifying(this.selectedYearForRound,this.selectedRound).subscribe((res)=>
    {
      this.qualifyResult=res.MRData.RaceTable.Races[0]

      console.log(this.qualifyResult)
    })
  }

  getResultandQualify()
  {
    this.getResultByYearAndRound(),
    this.getQualifying()
    this.resulthidden=true
  }

}
