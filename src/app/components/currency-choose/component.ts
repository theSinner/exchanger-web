import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-currency-choose',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class CurrencyChooseComponent implements OnInit {

  @Output() ngModel;
  @Input() value;
  @Output() onChangeFunction?= new EventEmitter();
  @Output() onEnterPressedFunction?= new EventEmitter();
  @Output() valueChange = new EventEmitter<number>();

  currencies: any[] = [
    'EUR', 'CAD', 'HKD', 'ISK', 'PHP', 'DKK', 'HUF', 'CZK',
    'AUD', 'RON', 'SEK', 'IDR', 'INR', 'BRL', 'RUB', 'HRK', 'JPY', 'THB', 'CHF', 'SGD', 'PLN', 'BGN', 'TRY',
    'CNY', 'NOK', 'NZD', 'ZAR', 'USD', 'MXN', 'ILS', 'GBP', 'KRW', 'MYR'
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
