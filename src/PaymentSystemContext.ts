import {PaymentSystem} from './payment_system';
import {PaymentSystemBuilder} from './PaymentSystemBuilder';
import {CreditCardPaymentSystemBuilder} from './CreditCardPaymentSystemBuilder';
import {BankDraftPaymentSystemBuilder} from './BankDraftPaymentSystemBuilder';
import {OnlinePaymentSystemBuilder} from './OnlinePaymentSystemBuilder';
import {OfflinePaymentSystemBuilder} from './OfflinePaymentSystemBuilder';

export class PaymentSystemContext {
  #_paymentSystemBuilders: PaymentSystemBuilder[];

  constructor() {
    this.#_paymentSystemBuilders = [];
    this.#_paymentSystemBuilders.push(new CreditCardPaymentSystemBuilder());
    this.#_paymentSystemBuilders.push(new BankDraftPaymentSystemBuilder());
    this.#_paymentSystemBuilders.push(new OnlinePaymentSystemBuilder());
    this.#_paymentSystemBuilders.push(new OfflinePaymentSystemBuilder());
  }

  execute(id: string): void {
    let psb: PaymentSystemBuilder = this.#_paymentSystemBuilders.filter(builder => builder.isMatch(id))[0];
    psb.build();
    psb.getPaymentSystem().validate();
  }
}
