import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiDataService {

  constructor(private http: Http) { }
  getCurrencyExchangeRate(source: string, destination: string) {
    return this.http.get(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=JPY&apikey=demo`)
    // this.http.get(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${source}&to_currency=${destination}&apikey=${apikey}`)
  }

}
