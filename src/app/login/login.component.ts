import { Component, OnInit,  } from '@angular/core';
import { Account } from '../models/account.model';
import { AccountsService } from '../accounts.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { ApiDataService } from '../api-data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AccountsService, ApiDataService]
})
export class LoginComponent implements OnInit {
  

  exchanges: any[]=null;
  rate: string = "";
  result: number = 0;

  constructor(private accountsService: AccountsService, private apiDataService: ApiDataService) { }

  accounts: FirebaseListObservable<any[]>;
  assetsToDisplay: string[];

  ngOnInit() {
     this.accounts = this.accountsService.getAccounts();
  }

  triggerBuyRequest(destination: string, amount: string) {
    this.apiDataService.buyCurrencyExchangeRate( destination).subscribe(response => {
        this.exchanges = response.json();
        this.rate = this.exchanges["Realtime Currency Exchange Rate"]["5. Exchange Rate"];

        this.result = (parseFloat(amount) * parseFloat(this.rate));
    });

  }
}
