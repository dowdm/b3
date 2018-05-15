import { Injectable } from '@angular/core';
import {Account} from './models/account.model'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AccountsService {

  accounts: FirebaseListObservable<any[]>;
  assets: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.accounts = database.list('accounts');
    this. assets = database.list('assets')
   }

   getAccounts(){
    return this.accounts;
  }
  getAssets(){
    return this.assets;
  }
}
