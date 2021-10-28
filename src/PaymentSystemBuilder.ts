import {PaymentSystem} from './payment_system';

export abstract class PaymentSystemBuilder {
  protected _paymentSystem!: PaymentSystem;

  abstract isMatch(id: string): boolean;
  abstract build(): void;

  getPaymentSystem(): PaymentSystem {
    return this._paymentSystem;
  }
}
