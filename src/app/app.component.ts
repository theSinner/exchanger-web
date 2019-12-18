import { Component } from '@angular/core';
import { ExchangeResource } from './resources/exchange';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'exchanger';
  leftCurrency = 'EUR';
  rightCurrency = 'USD';
  leftAmount = 0;
  rightAmount = 0;
  rightNormalizedValue;
  leftNormalizedValue;
  loadingMode = false;
  resultMode = false;
  timeout: any;
  constructor(
    private exchangeResource: ExchangeResource) {
  }


  calculateAmount(amount, side) {
    this.loadingMode = true;
    if (side === 'left') {
      this.exchangeResource.getCalculatedValue(
        this.leftCurrency, this.rightCurrency, amount
      )
        .subscribe(details => {
          console.log(details);
          this.resultMode = true;
          this.rightAmount = details.value;
          this.rightNormalizedValue = details.normalized;
        }, error => {
        });
    } else if (side === 'right') {
      this.exchangeResource.getCalculatedValue(
        this.rightCurrency, this.leftCurrency, amount
      )
        .subscribe(details => {
          this.resultMode = true;
          this.leftAmount = details.value;
          this.leftNormalizedValue = details.normalized;
        }, error => {
        });
    }
  }

  clearResults() {
    this.resultMode = false;
    this.leftNormalizedValue = undefined;
    this.rightNormalizedValue = undefined;
  }

  unitChanged(evnt) {
    this.clearResults();
    this.calculateAmount(this.leftAmount, 'left');
  }

  amountChanged(amount, side) {
    if (amount == null || amount == "") {
      this.leftAmount = 0;
      this.rightAmount = 0;
      this.clearResults();
    }
    this.clearResults();
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => this.calculateAmount(amount, side), 500);
  }

}
