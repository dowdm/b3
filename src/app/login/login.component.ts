import { Component, OnInit,  } from '@angular/core';
import { Account } from '../models/account.model';
import { AccountsService } from '../accounts.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { ApiDataService } from '../api-data.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AccountsService, ApiDataService]
})
export class LoginComponent implements OnInit {

  accountId: string;
  accountToDisplay;
  exchanges: any[]=null;
  rate: string = "";
  result: number = 0;

  constructor(private accountsService: AccountsService, private apiDataService: ApiDataService, private route: ActivatedRoute) { }

  accounts: FirebaseListObservable<any[]>;
  assetsToDisplay: string[];

  ngOnInit() {
     this.accounts = this.accountsService.getAccounts();
     this.route.params.forEach((urlParameters) => {
      this.accountId = urlParameters['id'];
  });
  this.accountsService.getAccountById(this.accountId).subscribe(dataLastEmittedFromObserver => {
    this.accountToDisplay = dataLastEmittedFromObserver;

    })
  }

  triggerBuyRequest(destination: string, amount: string) {
    this.apiDataService.buyCurrencyExchangeRate(destination).subscribe(response => {
        this.exchanges = response.json();
        this.rate = this.exchanges["Realtime Currency Exchange Rate"]["5. Exchange Rate"];
        this.result = (parseFloat(amount) * parseFloat(this.rate));
    });
  }

  triggerBalanceUpdate(accountToUpdate, amount){
      this.accountsService.balanceUpdate(accountToUpdate, amount);
  }
}
