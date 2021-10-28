import {PaymentSystem} from './payment_system';

export class CreditCardPaymentSystem implements PaymentSystem {
  #_name: string;
  #_creditCardNumber: string;
  #_creditCardExpirationDate: string;

  constructor(name: string, cardNumber: string, cardExpiryDate: string) {
    this.#_name = name;
    this.#_creditCardNumber = cardNumber;
    this.#_creditCardExpirationDate = cardExpiryDate;
  }

  validate(): boolean {
    let valid = /^[\w.' ]+$/.test(this.#_name) && /\d{15,16}/.test(this.#_creditCardNumber) && /\d\d\/\d\d/.test(this.#_creditCardExpirationDate);

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
