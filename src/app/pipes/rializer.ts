import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'rializer' })
export class Rializer implements PipeTransform {

  constructor() {

  }

  transform(value: string, unit: string): string {

    if (value == undefined) {
      return '';
    }
    let n = parseInt(value);

    if (unit == 'toman') {
      n = Math.floor(n / 10);
    }

    const rx = /(\d+)(\d{3})/;
    return String(n).replace(/^\d+/, function (w) {
      var res = w;
      while (rx.test(res)) {
        res = res.replace(rx, '$1٬$2');
      }
      return res;
    });

  }
}