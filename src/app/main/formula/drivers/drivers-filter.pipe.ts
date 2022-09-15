import { Pipe, PipeTransform } from '@angular/core';
import { Driver } from 'src/app/shared/models/driver';

@Pipe({
  name: 'driversFilter'
})
export class DriversFilterPipe implements PipeTransform {

  transform(value: Driver[], filterText:string|any): Driver[] {
    filterText=filterText?filterText.toLocaleLowerCase():null;
    return !filterText ? value : value.filter(x=> x.givenName.toLocaleLowerCase().startsWith(filterText));
    
  }

}
