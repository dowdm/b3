import { Component, OnInit } from '@angular/core';
import { Account } from '../models/account.model';
import { AccountsService } from '../accounts.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AccountsService]
})
export class LoginComponent implements OnInit {

  accountToDisplay;
  userAccount: string = '0';

  constructor(private accountsService: AccountsService) { }

  accounts: FirebaseListObservable<any[]>;
  assets: FirebaseListObservable<any[]>;

  ngOnInit() {
    this.accounts = this.accountsService.getAccounts();
    this.assets = this.accountsService.getAssets();
  }
}
