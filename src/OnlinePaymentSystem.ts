import {PaymentSystem} from './payment_system';

export class OnlinePaymentSystem implements PaymentSystem {
  #_email: string;
  #_paymentPassword: string;

  constructor(email: string, paymentPassword: string) {
    this.#_email = email;
    this.#_paymentPassword = paymentPassword;
  }

  validate(): boolean {
    let valid = /^[\w@.]+$/.test(this.#_email) && /\w+/.test(this.#_paymentPassword);

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
