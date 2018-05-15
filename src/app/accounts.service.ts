import { Injectable } from '@angular/core';
import {Account} from './models/account.model'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AccountsService {

  accounts: FirebaseListObservable<any[]>;
  assets: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.accounts = database.list('accounts');
   }

   getAccounts(){
    return this.accounts;
  }
  // getAssets(){
  //   return this.assets;
  // }
  // getAccountById(id: string) {
  //   return this.database.object('accounts/' + id);
  //   console.log(id);
  // }
  // addAssets(accountToEdit, asset){
  //   var accountEntryInFirebase = this.getAccountById(accountToEdit.$key);
  //   accountEntryInFirebase.update(this.assets.push(asset));
  //
  // }
}
