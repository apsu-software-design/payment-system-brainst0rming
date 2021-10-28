import {PaymentSystem} from './payment_system';
import {PaymentSystemBuilder} from './PaymentSystemBuilder';
import {CreditCardPaymentSystem} from './CreditCardPaymentSystem';
import readlineSync = require('readline-sync');

export class CreditCardPaymentSystemBuilder extends PaymentSystemBuilder{
  //#_paymentSystem: PaymentSystem;

  isMatch(id: string): boolean {
    return id == "CREDIT_CARD";
  }

  build(): void {
    console.log('Enter Credit Card Payment Details.');

    let n:string = readlineSync.question('  Name: ');
    let ccNum:string = readlineSync.question('  Credit Card Number: ');
    let ccExp:string = readlineSync.question('  Credit Card Expiration Date (MM/DD): ');

    this._paymentSystem = new CreditCardPaymentSystem(n, ccNum, ccExp);
  }
}
