import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment/moment'

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let today = moment();
    let birth = moment(value);
    return today.diff(birth, "years");
  }

}
