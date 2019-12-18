import { Injectable } from '@angular/core';
import { BaseResource } from './base';
import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';


@Injectable()
export class ExchangeResource extends BaseResource {

  public getCalculatedValue(source, target, amount): Observable<any> {
    const url = `${this.baseUrl}/exchange/${source}/${target}/${amount}`;

    return this.http.get<any>(url).pipe(
      tap((response: any) => {

      }),
      catchError(error => this.handleError(error))
    );
  }

}

