import {PaymentSystem} from './payment_system';
import {PaymentSystemBuilder} from './PaymentSystemBuilder';
import {BankDraftPaymentSystem} from './BankDraftPaymentSystem';
import readlineSync = require('readline-sync');

export class BankDraftPaymentSystemBuilder extends PaymentSystemBuilder{
  //#_paymentSystem: PaymentSystem;

  isMatch(id: string): boolean {
    return id == "BANK_DRAFT";
  }

  build(): void {
    console.log('Enter Bank Account Details.');
    let n:string = readlineSync.question('  Name: ');
    let routing:string = readlineSync.question('  Bank Routing Number: ');
    let account:string = readlineSync.question('  Bank Account Number: ');

    this._paymentSystem = new BankDraftPaymentSystem(n, routing, account);
  }
}
