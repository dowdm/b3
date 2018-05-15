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




  constructor(private accountsService: AccountsService) { }

  accounts: FirebaseListObservable<any[]>;
  assetsToDisplay: string[];

  ngOnInit() {
     this.accounts = this.accountsService.getAccounts();
    //  this.assetsToDisplay = this.accounts[0].asset
  }
}
