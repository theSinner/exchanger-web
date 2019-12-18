import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-currency-choose',
  templateUrl: './currency-choose.component.html',
  styleUrls: ['./currency-choose.component.scss']
})
export class CurrencyChooseComponent implements OnInit {

  @Output() ngModel;
  @Input() value;
  @Output() onChangeFunction?= new EventEmitter();
  @Output() onEnterPressedFunction?= new EventEmitter();
  @Output() valueChange = new EventEmitter<number>();

  currencies: any[] = [
    'AUD', 'BGN', 'BRL', 'CAD', 'CHF', 'CNY', 'CZK', 'DKK', 'EUR',
    'GBP', 'HKD', 'HRK', 'HUF', 'IDR', 'ILS', 'INR', 'ISK', 'JPY',
    'KRW', 'MXN', 'MYR', 'NOK', 'NZD', 'PHP', 'PLN', 'RON', 'RUB',
    'SEK', 'SGD', 'THB', 'TRY', 'USD', 'ZAR'
  ];

  returnValue(input: any) {
    this.value = input;
    this.valueChange.emit(this.value);
    if (this.onChangeFunction) {
      this.onChangeFunction.emit(this.value);
    }
  }

  chooseItem(item) {
    this.returnValue(item);
  }

  constructor() { }

  ngOnInit() {
  }

}
