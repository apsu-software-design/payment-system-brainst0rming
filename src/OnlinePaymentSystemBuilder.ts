import {PaymentSystem} from './payment_system';
import {PaymentSystemBuilder} from './PaymentSystemBuilder';
import {OnlinePaymentSystem} from './OnlinePaymentSystem';
import readlineSync = require('readline-sync');

export class OnlinePaymentSystemBuilder extends PaymentSystemBuilder{
  //#_paymentSystem: PaymentSystem;

  isMatch(id: string): boolean {
    return id == "ONLINE";
  }

  build(): void {
    console.log('Enter Online Payment Details.');
    let e:string = readlineSync.question('  Enter Your Email Address: ');
    let pass:string = readlineSync.question('  Enter Your Payment Password: ');

    this._paymentSystem = new OnlinePaymentSystem(e, pass);
  }
}
