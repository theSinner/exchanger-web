import { Injectable } from '@angular/core';
import { RequestMethod, BrowserXhr } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {
  HttpClient,
  HttpHeaders,
  HttpParams
} from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

import { SnackbarService } from '../services/snackbar/snackbar.service';
import { throwError } from 'rxjs';

@Injectable()
export class BaseResource extends BrowserXhr {

  constructor(public http: HttpClient,
    public snackbar: SnackbarService) {
    super()
  }

  build(): any {
    let xhr = super.build();
    xhr.withCredentials = true;
    return <any>(xhr);
  }

  ngOnInit() {

  }

  public baseUrl = '/api';

  public httpOptions() {
    return {
      'headers': new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
  }

  getQueryString(data) {
    let params = new URLSearchParams();
    for (let key in data) {
      if (Array.isArray(data[key])) {
        for (let i = 0; i < data[key].length; i++) {
          params.append(key, data[key][i]);
        }
      } else {
        params.set(key, data[key]);
      }
    }
    return params;
  }

  public handleError(error) {
    var errorTxt = error.error.error.message;
    if (Array.isArray(errorTxt)) {
      this.snackbar.openAlertSnack(errorTxt[0]);
    } else if (typeof errorTxt == "object") {
      for (let item in errorTxt) {
        let errorTextValue = errorTxt[item];
        errorTextValue = errorTextValue.replace('This field', item);
        this.snackbar.openAlertSnack(errorTextValue);
        break;
      }
    } else if (errorTxt) {
      this.snackbar.openAlertSnack(errorTxt);
    } else {
      this.snackbar.openAlertSnack("Failed. Please try again.");
    }
    return throwError(error);
  }


  showSnack() {
    this.snackbar.openSnack();
  }

  hideSnackbar() {
    this.snackbar.dismissSnackbar();
  }



}

