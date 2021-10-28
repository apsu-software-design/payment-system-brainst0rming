import {PaymentSystem} from './payment_system';
import {PaymentSystemBuilder} from './PaymentSystemBuilder';
import {OfflinePaymentSystem} from './OfflinePaymentSystem';
import readlineSync = require('readline-sync');

export class OfflinePaymentSystemBuilder extends PaymentSystemBuilder{
  //#_paymentSystem: PaymentSystem;

  isMatch(id: string): boolean {
    return id == "OFFLINE";
  }

  build(): void {
    console.log('Enter Offline Payment Details.');
    let n:string = readlineSync.question('  Name: ');
    let address:string = readlineSync.question('  Enter Your Billing Address: ');

    this._paymentSystem = new OfflinePaymentSystem(n, address);
  }
}
