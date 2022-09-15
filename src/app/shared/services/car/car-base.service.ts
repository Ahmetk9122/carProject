import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarBaseService {
  carUrl:string="https://www.iyikod.com/arabalistesi/api.php"
  constructor() { }
}
