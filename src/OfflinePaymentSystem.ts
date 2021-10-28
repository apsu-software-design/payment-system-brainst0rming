import {PaymentSystem} from './payment_system';

export class OfflinePaymentSystem implements PaymentSystem {
  #_name: string;
  #_billingAddress: string;

  constructor(name: string, address: string) {
    this.#_name = name;
    this.#_billingAddress = address;
  }

  validate(): boolean {
    let valid = /^[\w.' ]+$/.test(this.#_name) && /^[\w.' ]+$/.test(this.#_billingAddress);

    if (valid) {
      console.log("Your payment information is being encrypted.");
      console.log("The payment is being processed.");
    }
    else {
      console.log('The payment is invalid.');
    }

    return valid;
  }
}
